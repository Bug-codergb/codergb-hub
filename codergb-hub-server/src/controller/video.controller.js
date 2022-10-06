const path = require("path");
const { setResponse } = require("../utils/setResponse");
const { mergeVideo } = require("../utils/mergeVideo");
const { isEmpty } = require("../utils/isEmpty")
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
      const {dest="",hash=""} = ctx.request.body;
      if(!isEmpty(ctx,dest,"目的路径不能为空") && !isEmpty(ctx,hash,"文件HASH值不能为空")){
        mergeVideo(ctx,dest,path.resolve(__dirname,"../../","./upload/video"),hash);
        setResponse(ctx,"文件合并成功",200)
      }
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
}
module.exports = new VideoController();
