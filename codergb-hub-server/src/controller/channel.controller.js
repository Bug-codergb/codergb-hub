const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const { setImgPrev } = require("../utils/setImgPrev");
const { deleteFileReq } = require("../utils/deleteFile")
const { APP_HOST,APP_PORT } = require("../app/config");
const { uploadHandle } = require("../utils/uploadHandle")
const {
  createChannelService,
  getChannelMsgService,
  uploadAvatarService
} = require("../service/channel.service");
class ChannelController{
  async createChannel(ctx,next){
    try{
      const { name,alias="",description="",official=0,banner="",trailer="" } = ctx.request.body;
      console.log(name)
      if(!isEmpty(ctx,name,"频道名称不能为空") &&
        !isEmpty(ctx,banner,"频道横幅不能为空") &&
        !isEmpty(ctx,trailer,"请添加频道预告片")){
        const result = await createChannelService(ctx,name,banner,trailer,description,official);
        console.log(result)
        if(result){
          setResponse(ctx,"频道添加成功",200,{});
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //上传频道头像
  async uploadAvatar(ctx,next){
    try{
      if(ctx.req.file && Object.keys(ctx.req.file)){
        const { mimetype,destination,filename,originalname, size } = ctx.req.file;
        const id = new Date().getTime();
        const picUrl=`${APP_HOST}:${APP_PORT}/image/${id}`;
        const result = await uploadAvatarService(ctx,id,picUrl,originalname,mimetype,destination,filename,size);
        if(result){
          setResponse(ctx,"头像上传成功成功",200,{});
        }
      }else{
        setResponse(ctx,"上传文件不能为空",400);
      }
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }

}

module.exports = new ChannelController();
