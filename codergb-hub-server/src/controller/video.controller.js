const path = require("path");
const { setResponse } = require("../utils/setResponse");
const { mergeVideo } = require("../utils/mergeVideo");
const { isEmpty } = require("../utils/isEmpty")
const { videoToM3u8 } = require("../utils/toM3u8");
const { deleteFile } = require("../utils/deleteFile");
const { videoPath } = require("../constant/uploadPath");
const { APP_PORT,APP_HOST } = require("../app/config")
const {
  uploadVideoService
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
      setResponse(ctx,e.message,500,{})
    }
  }
  //视频合并
  async mergeVideo(ctx,next){
    try{
      const {dest="",hash="",originalname,type,total} = ctx.request.body;
      console.log(dest,hash,originalname,type,total);
      if(!isEmpty(ctx,dest,"目的路径不能为空") && !isEmpty(ctx,hash,"文件HASH值不能为空")){
        const id = new Date().getTime();
        const result = await mergeVideo(ctx,dest,path.resolve(__dirname,"../../","./upload/video"),hash);
        if(result){
          const suffix = originalname.substring(originalname.lastIndexOf("."));
          const sourcePath = path.resolve(__dirname,"../../",`./upload/video/${hash}${suffix}`);
          const destPath = path.resolve(__dirname,"../../",`./upload/video/`)
          const result = await videoToM3u8(sourcePath, destPath, hash);
          if(result){
            await deleteFile(sourcePath);
            const vioPath = videoPath.replace("./upload","");
            const vioUrl = `${APP_HOST}:${APP_PORT}${vioPath}${hash}.m3u8`;
            const result = await uploadVideoService(ctx,id,videoPath,`${hash}.m3u8`,originalname,vioUrl);
          }
        }
        setResponse(ctx,"文件上传成功",200,{
          id:id
        })
      }
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
}
module.exports = new VideoController();
