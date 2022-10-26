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
  async createVideoService(ctx,videoId, title, desc, imgId, playlistId, tagIds, cateId){
    try{
      const id = new Date().getTime();
      const videoSql = `insert into video(id,name,description,cateId) values(?,?,?,?)`;
      const result = await connection.execute(videoSql,[id,title,desc,cateId]);
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
}
module.exports  = new VideoService();
