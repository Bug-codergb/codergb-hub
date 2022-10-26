const path = require("path");
const { setResponse } = require("../utils/setResponse");
const { mergeVideo } = require("../utils/mergeVideo");
const { isEmpty } = require("../utils/isEmpty")
const { videoToM3u8 } = require("../utils/toM3u8");
const { deleteFile } = require("../utils/deleteFile");
const { videoPath } = require("../constant/uploadPath");
const { APP_PORT,APP_HOST } = require("../app/config")
const {
  uploadVideoService,
  createVideoService
} = require("../service/video.service")
class VideoController{
  async uploadVideo(ctx,next){
    try{
      const {
        chunkSize, hash, index, name, size, type, uploadedSize,
      } = ctx.req.body;
      const data = {
        chunkSize, hash, index, name, size, type,
        uploadedSize:chunkSize*1+uploadedSize*1,
        dest:ctx.req.body.dest
      }
      setResponse(ctx,"上传成功",200,data);
    }catch (e) {
      console.log(e);
      setResponse(ctx,e.message,500,{})
    }
  }
  //视频合并
  async mergeVideo(ctx,next){
    try{
      const {dest="",hash="",originalname,type,total} = ctx.query;
      if(!isEmpty(ctx,dest,"目的路径不能为空") && !isEmpty(ctx,hash,"文件HASH值不能为空")){
        const id = new Date().getTime();
        const result = await mergeVideo(ctx,dest,path.resolve(__dirname,"../../","./upload/video"),hash);
        if(result){
          const suffix = originalname.substring(originalname.lastIndexOf("."));
          const sourcePath = path.resolve(__dirname,"../../",`./upload/video/${hash}${suffix}`);
          const destPath   = path.resolve(__dirname,"../../",`./upload/video/`)
          const result = await videoToM3u8(sourcePath, destPath, hash,(progress)=>{
            let res={
              isProgress:true,
              percent:progress.percent
            }
            ctx.websocket.send(JSON.stringify(res));
          });
          if(result){
            await deleteFile(sourcePath);
            const vioPath = videoPath.replace("./upload","");
            const vioUrl = `${APP_HOST}:${APP_PORT}${vioPath}${hash}.m3u8`;
            const result = await uploadVideoService(ctx,id,videoPath,`${hash}.m3u8`,originalname,vioUrl);
            let res={
              id:id,
              isProgress:false,
              percent:100
            }
            ctx.websocket.send(JSON.stringify(res));
            ctx.websocket.close();
          }
        }
        /*setResponse(ctx,"文件上传成功",200,{
          id:id
        })*/
      }
    }catch (e) {
      console.log(e)
      setResponse(ctx,e.message,500);
    }
  }
  //视频创建
  async createVideo(ctx,next){
    try{
      const {
        videoId,
        title,
        desc,
        imgId,
        playlistId,
        tagIds,
        cateId
      } = ctx.request.body;
      if(!isEmpty(ctx,videoId,"请选择文件")&&
         !isEmpty(ctx,title,"视频标题不能为空")&&
         !isEmpty(ctx,desc,"视频简介不能为空")&&
         !isEmpty(ctx,imgId,"视频封面不能为空")&&
         !isEmpty(ctx,playlistId,"请选择视频播放列表")&&
         !isEmpty(ctx,tagIds,"视频标签不能为空")&&
         !isEmpty(ctx,cateId,"视频分类不能为空")){
        const result = await createVideoService(ctx,videoId, title, desc, imgId, playlistId, tagIds, cateId);
        if(result){
          setResponse(ctx,"success",200,{});
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new VideoController();
