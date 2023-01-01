const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class VideoService{
  async uploadVideoService(ctx,id,dest,filename,originalname,vioUrl){
    try{
      const sql = `insert into file (id,vioUrl,dest,originalname,filename) values(?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,vioUrl,dest,originalname,filename]);
      return result[0];
    }catch (e) {
      ctx.setResponse(ctx,e.message,500,{})
    }
  }
  //创建视频
  async createVideoService(ctx,userId,videoId, title, desc, imgId, playlistId, tagIds, cateId){
    try{
      const id = new Date().getTime();
      const videoSql = `insert into video(id,userId,name,description,cateId) values(?,?,?,?,?)`;
      const result = await connection.execute(videoSql,[id,userId,title,desc,cateId]);
      await new VideoService().createVideoFileService(ctx,id,imgId,"cover");
      await new VideoService().createVideoFileService(ctx,id,videoId,"source");
      await new VideoService().createVideoPlaylistService(ctx,id,playlistId);
      await new VideoService().createVideoTagService(ctx,id,tagIds);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //视频封面(其他文件也可)
  async createVideoFileService(ctx,vId,fId,mark="cover"){
    try{
      const sql=`insert into video_file(videoId,fileId,mark) values(?,?,?)`;
      const result = await connection.execute(sql,[vId,fId,mark]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //视频播放列表
  async createVideoPlaylistService(ctx,vId,pId){
    try{
      const sql=`insert into playlist_video(pId,vId) values(?,?)`;
      const result = await connection.execute(sql,[pId,vId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //视频tag
  async createVideoTagService(ctx,vId,tagIds){
    try{
      let result={};
      for(let item of tagIds){
        const sql=`insert into tag_video(tId,vId) values(?,?)`;
        result = await connection.execute(sql,[item,vId]);
      }
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async allVideoCountService(ctx){
    try{
      const sql=`
      select count(DISTINCT(v.id)) as count
          from video as v
          LEFT JOIN category as c on c.id = v.cateId
          LEFT JOIN video_file as vf on vf.videoId = v.id
          LEFT JOIN file as f on f.id = vf.fileId
          LEFT JOIN tag_video as tv on tv.vId = v.id
          LEFT JOIN tag on tag.id = tv.tId
          where vf.mark="cover"
          ORDER BY v.createTime desc`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async allVideoService(ctx,offset,limit){
    try{
      const sql=`
      select DISTINCT(v.id),v.name,v.playCount,v.dt,v.description,v.createTime,v.updateTime,JSON_OBJECT(
         'id',c.id,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) as category,f.picUrl,JSON_ARRAYAGG(JSON_OBJECT(
			   'id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime
			 )) as tag,(select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
                        from user as u where u.userId=v.userId) as user
      from video as v
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      where vf.mark="cover"
      GROUP BY v.id
      ORDER BY v.createTime desc
      limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new VideoService().allVideoCountService(ctx);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //获取视频URL
  async getVideoURLService(ctx,id){
    try{
      const sql=`select distinct(v.id),v.name,f.vioUrl
                 from video as v
                 INNER JOIN video_file as vf on v.id = vf.videoId
                 INNER JOIN file as f on f.id=vf.fileId
                 where v.id=? AND vf.mark = "source" and vioUrl is not null`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //获取视频详情
  async getVideoDetailService(ctx,id){
    try{
      const sql=`
      select v.id,v.name,v.playCount,v.dt,v.description,v.createTime,v.updateTime,f.picUrl,
       (select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
			 from user as u where u.userId = v.userId) as user,
			 JSON_OBJECT('id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime) AS category,
			 JSON_ARRAYagg(JSON_OBJECT('id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime)) as tag
      from video as v
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      LEFT JOIN video_file as vf on vf.videoId =v.id
      LEFT JOIN file as f on f.id = vf.fileId
      where v.id=? and vf.mark="cover"`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getSubUserVioCountService(ctx,userId,isMonth){
    try{
      const sql=`
      select count(DISTINCT(v.id)) as count
      from subscriber as sub
      INNER JOIN video as v on v.userId = sub.upId
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      where sub.userId = ? and MONTH(v.createTime) ${isMonth ===1 ?'=' :'!='} MONTH(NOW()) and vf.mark="cover"`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getSubUserVioService(ctx,userId,isMonth,offset,limit){
    try{
      const sql=`
      select v.id,v.name,(select JSON_OBJECT('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
                    from user as u where u.userId=v.userId) as user,
       v.playCount,v.dt,v.description,v.createTime,v.updateTime,JSON_OBJECT(
         'id',c.id,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) as category,f.picUrl,JSON_ARRAYAGG(JSON_OBJECT(
			   'id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime
			 )) as tag
        from subscriber as sub
        INNER JOIN video as v on v.userId = sub.upId
        LEFT JOIN category as c on c.id = v.cateId
        LEFT JOIN video_file as vf on vf.videoId = v.id
        LEFT JOIN file as f on f.id = vf.fileId
        LEFT JOIN tag_video as tv on tv.vId = v.id
        LEFT JOIN tag on tag.id = tv.tId
        where sub.userId = ? and MONTH(v.createTime) ${isMonth ===1 ?'=' :'!='} MONTH(NOW()) and vf.mark="cover"
        GROUP BY v.id
        ORDER BY v.createTime desc
        limit ?,?`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new VideoService().getSubUserVioCountService(ctx,userId,isMonth);
      return{
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }

}
module.exports  = new VideoService();
