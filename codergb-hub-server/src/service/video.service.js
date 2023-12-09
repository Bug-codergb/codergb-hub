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
  async createVideoService(ctx,userId,videoId, title, desc, imgId, playlistId, tagIds, cateId,dt){
    try{
      const id = new Date().getTime();
      const videoSql = `insert into video(id,userId,name,description,cateId,dt,isShort) values(?,?,?,?,?,?,?)`;
      const result = await connection.execute(videoSql,[id,userId,title,desc,cateId,dt,0]);
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
  async allVideoCountService(ctx,keyword,tag,cate){
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
           ${keyword.trim().length !== 0 ? `and v.name like '%${keyword}%'`:''}
      ${tag!==null && tag.length!==0? `and tag.id in (${tag.join(",")})`:''}
      ${cate.trim().length!==0?`and v.cateId = ${cate}`:''}
          ORDER BY v.createTime desc`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async allVideoService(ctx,offset,limit,keyword,tag,cate){
    try{
      const sql=`
      select DISTINCT(v.id),v.name,v.playCount,v.dt,v.description,v.createTime,v.updateTime,JSON_OBJECT(
         'id',c.id,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) as category,f.picUrl,(select JSON_ARRAYAGG(JSON_OBJECT(
\t\t\t   'id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime
\t\t\t )) from tag_video as tv
\t\t\t   \tLEFT JOIN tag on tag.id = tv.tId
\t\t\t\t\twhere tv.vId = v.id
\t\t\t ) as tag,(select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
                        from user as u where u.userId=v.userId) as user,
                        (select JSON_ARRAYAGG(JSON_OBJECT(
\t\t\t\t'id',pp.id,'name',pp.name,'isPublic',pp.isPublic,'description',pp.description
\t\t\t)) from playlist_video as pv LEFT JOIN playlist as pp on pp.id=pv.pId where pv.vId = v.id) as playlist,
vf.fileId as imgId,(SELECT vf.fileId from video_file as vf where vf.videoId = v.id and vf.mark="source") as videoSourceId  \t\t\t\t\t
      from video as v
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      where vf.mark="cover"
      ${keyword.trim().length !== 0 ? `and v.name like '%${keyword}%'`:''}
      ${tag!==null && tag.length!==0? `and tag.id in (${tag.join(",")})`:''}
      ${cate.trim().length!==0?`and v.cateId = ${cate}`:''}
      GROUP BY v.id
      ORDER BY v.createTime desc
      limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new VideoService().allVideoCountService(ctx,keyword,tag,cate);
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
    console.log("success");
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
  async getThumbUserCountVioService(ctx,userId){
    try{
      const sql=`
      select count(t.id) as count
      from thumb as t
      LEFT JOIN user as u on u.userId=t.userId
      LEFT JOIN video as v on v.id = t.vId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      where t.userId =  ? and t.tread = 0 and vf.mark="cover" and t.vId is not null`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getThumbUserVioService(ctx,userId,offset,limit){
    try{
      const sql=`
      select t.id,t.createTime,t.updateTime,
        JSON_OBJECT('userId',t.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user,
			 JSON_OBJECT('id',v.id,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',v.description,
			              'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',f.picUrl,'user',
       (select JSON_OBJECT(
			  'userId',v.userId,
				'userName',u.userName,
				'avatarUrl',u.avatarUrl
			 ) from user as u WHERE u.userId = v.userId),
			 'category',(select JSON_OBJECT(
			  'id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) from category as c where c.id = v.cateId),
			 'tag',(select JSON_ARRAYAGG(
			   JSON_OBJECT('id',t.id,'name',t.name,'createTime',t.createTime,'updateTime',t.updateTime)
			 ) FROM tag as t LEFT JOIN tag_video as tv on tv.tId = t.id where tv.vId = v.id)) as video
       from thumb as t
       LEFT JOIN user as u on u.userId=t.userId
       LEFT JOIN video as v on v.id = t.vId
       LEFT JOIN video_file as vf on vf.videoId = v.id
       LEFT JOIN file as f on f.id = vf.fileId
       where t.userId = ? and t.tread = 0 and vf.mark="cover" and t.vId is not null
       ORDER BY t.updateTime desc
       LIMIT ?,?`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new VideoService().getThumbUserCountVioService(ctx,userId);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getSimilarVideoCountService(ctx,id){
    try{
      const sql=`
      select count(DISTINCT(v.id)) as count
      from category as c
      LEFT JOIN video as v on v.cateId = c.id
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      LEFT JOIN video_file as vf on vf.videoId =v.id
      LEFT JOIN file as f on f.id = vf.fileId
      where c.id = ? and vf.mark="cover"`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getSimilarVideoService(ctx,id,offset,limit){
    try{
      const sql=`
      select v.id,v.name,v.playCount,v.dt,v.description,v.createTime,v.updateTime,f.picUrl,
       (select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
			 from user as u where u.userId = v.userId) as user,
			 JSON_OBJECT('id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime) AS category,
			 JSON_ARRAYagg(JSON_OBJECT('id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime)) as tag
       from category as c
       LEFT JOIN video as v on v.cateId = c.id
       LEFT JOIN tag_video as tv on tv.vId = v.id
       LEFT JOIN tag on tag.id = tv.tId
       LEFT JOIN video_file as vf on vf.videoId =v.id
       LEFT JOIN file as f on f.id = vf.fileId
       where c.id = ? and vf.mark="cover"
       GROUP BY v.id
       ORDER BY v.playCount desc
       limit ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const count = await new VideoService().getSimilarVideoCountService(ctx,id);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getColVideoCountService(ctx,id,keyword,tag,cate){
    try{
      const sql=`
      select count(DISTINCT(v.id)) as count
      from collection as col
      INNER JOIN collection_video as cv on cv.cId = col.id
      LEFT JOIN video as v on v.id=cv.vId
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      where vf.mark="cover" and col.id=?
      ${keyword.trim().length !== 0 ? `and v.name like '%${keyword}%'`:''}
      ${tag!==null && tag.length!==0? `and tag.id in (${tag.join(",")})`:''}
      ${cate.trim().length!==0?`and v.cateId = ${cate}`:''}`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      console.log(e)
    }
  }
  async getColVideoService(ctx,id,offset,limit,keyword,tag,cate){
    try{
      const sql=`select DISTINCT(v.id),v.name,v.description,v.dt,v.playCount,v.createTime,v.updateTime,JSON_OBJECT(
         'id',c.id,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) as category,f.picUrl,(select JSON_ARRAYAGG(JSON_OBJECT(
\t\t\t   'id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime
\t\t\t )) from tag_video as tv
\t\t\t   \tLEFT JOIN tag on tag.id = tv.tId
\t\t\t\t\twhere tv.vId = v.id
\t\t\t ) as tag,(select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
									from user as u where u.userId=v.userId) as user
       from collection as col
       INNER JOIN collection_video as cv on cv.cId = col.id
       LEFT JOIN video as v on v.id=cv.vId
       LEFT JOIN category as c on c.id = v.cateId
       LEFT JOIN video_file as vf on vf.videoId = v.id
       LEFT JOIN file as f on f.id = vf.fileId
       LEFT JOIN tag_video as tv on tv.vId = v.id
       LEFT JOIN tag on tag.id = tv.tId
       where vf.mark="cover" and col.id=?
       ${keyword.trim().length !== 0 ? `and v.name like '%${keyword}%'`:''}
      ${tag!==null && tag.length!==0? `and tag.id in (${tag.join(",")})`:''}
      ${cate.trim().length!==0?`and v.cateId = ${cate}`:''}
       GROUP BY v.id
       ORDER BY v.createTime desc
       limit ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const count = await new VideoService().getColVideoCountService(ctx,id,keyword,tag,cate);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {

    }
  }
  async getVideoSourceService(){
    try{
      const sql=`
      select f.id,f.originalname,f.mimetype,f.dest,f.filename,vf.videoId as vid,v.name
      from file as f
      LEFT JOIN video_file as vf on vf.fileId = f.id
      LEFT JOIN video as v on v.id = vf.videoId
      where vf.mark='source'`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {

    }
  }
  async deleteVideoService(ctx,id){
    try{
      const sql=`delete from video where id=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {

    }
  }
  //更新视频
  async updateVideoInfoService(ctx, id, videoId, title, desc, imgId, playlistId, tagIds, cateId, dt){
    console.log(title);
    try{
      const sourceSQL=`update video set name=?,dt=?,description=?,cateId=? where id=?`;
      await connection.execute(sourceSQL,[title,dt,desc,cateId,id]);
      if(imgId){//更新封面
        const sql = `update video_file set fileId = ? where videoId=? and mark ='cover'`;
        await connection.execute(sql,[imgId,id]);
      }
      if(videoId){//更新视频源文件
        const sql = `update video_file set fileId = ? where videoId = ? and mark='source'`;
        await connection.execute(sql,[videoId,id]);
      }
      if(tagIds && Array.isArray(tagIds)){//更新标签
        const delSql=`delete from tag_video where vId =?`;
        await connection.execute(delSql,[id]);
        let temp = [];
        let s="";
        const len = tagIds.length;
        for(let i=0;i<tagIds.length;i++){
          const item = tagIds[i];
          s+= `(?,?)${i!==len-1?',':''}`;
          temp.push(item,id);
        }
        const insSql = `insert into tag_video (tId,vId) values ${s}`;

        await connection.execute(insSql,temp);
      }
      if(playlistId){
        const judgeSql = `select * from playlist_video where vId=?`;
        const res = await connection.execute(judgeSql,[id]);
        console.log(res[0]);
        if(res[0] && res[0].length===0){
          const sql = `insert into playlist_video(pId,vId) values(?,?)`;
          connection.execute(sql,[playlistId,id])
        }else{
          const sql = `update playlist_video set pId = ? where vId =?`;
          await connection.execute(sql,[playlistId,id]);
        }

      }
      return {}
    }catch (e) {
      console.log(e)
    }
  }
  async cateVideoService(ctx,cateId,offset,limit){
    try{
      const sql=`
            select v.id,v.name,(
              select JSON_OBJECT('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
              from user as u
              where u.userId = v.userId
            ) as user,playCount,dt,description,v.createTime,v.updateTime,f.picUrl,
            JSON_OBJECT('id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime) as category,v.dt,
            JSON_ARRAYAGG(
              json_object(
                'id',tag.id,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime
              )
            ) as tag
            from video as v
            left join category c on v.cateId =c.id
            left join tag_video as tv on tv.vId = v.id
            left join tag on tag.id = tv.tId
            LEFT JOIN video_file AS vf on vf.videoId = v.id
            left join file as f on f.id = vf.fileId
            where vf.mark="cover" and c.id=?
            group by v.id
            limit ?,?`;
      const res = await connection.execute(sql,[cateId,offset,limit]);
      const countSQL=`select count(distinct(v.id)) as count
              from video as v
              left join category c on v.cateId =c.id
              left join tag_video as tv on tv.vId = v.id
              left join tag on tag.id = tv.tId
              LEFT JOIN video_file AS vf on vf.videoId = v.id
              left join file as f on f.id = vf.fileId
              where vf.mark="cover" and c.id=?
              `;
      const count = await connection.execute(countSQL,[cateId])

      return{
        list:res[0],
        count:count[0][0].count
      }
    }catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }
  async addPlayCountService(ctx,id,playCount){
    try{
      const sql=`update video set playCount =? where video.id=?`;
      const result = await connection.execute(sql,[playCount,id]);
      return result[0]
    }catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }
}
module.exports  = new VideoService();
