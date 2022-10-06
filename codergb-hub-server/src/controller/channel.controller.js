const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const { setImgPrev } = require("../utils/setImgPrev");
const { deleteFileReq } = require("../utils/deleteFile")
const { APP_HOST,APP_PORT } = require("../app/config");
const { uploadHandle } = require("../utils/uploadHandle")
const { createChannelService,getChannelMsgService } = require("../service/channel.service");
class ChannelController{
  async createChannel(ctx,next){
    try{
      const { name,alias="",description="",official=0 } = ctx.request.body;
      if(!isEmpty(ctx,name,"频道名称不能为空")){
        const result = await createChannelService(ctx,name,alias,description,official);
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
        const { id } = ctx.params;
        const result = await uploadHandle(ctx,"/channel/avatar","channel",
                                  'avatarUrl','id',id,
                  ['avatarMimetype','avatarDest','avatarFilename','avatarSize','avatarOriginalname']);
        if(result){
          setResponse(ctx,"头像上传成功",200);
        }
      }else{
        setResponse(ctx,"上传文件不能为空",400);
      }
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  //获取频道头像
  async getAvatar(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await getChannelMsgService(id);
      if(result && result.length!==0){
        const info = result[0];
        await setImgPrev(ctx,`${info.avatarDest}/${info.avatarFilename}`,info.avatarMimetype);
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  //删除频道头像
  async deleteAvatar(ctx,next){
   try{
     const { id } = ctx.params;
     await deleteFileReq(ctx,next,id,getChannelMsgService,'avatarDest','avatarFilename');
   } catch (e) {
     setResponse(ctx,e.message,500)
   }
  }
  //更新频道头像
  async updateAvatar(ctx,next){
    try{
      await new ChannelController().uploadAvatar(ctx,next);
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
}

module.exports = new ChannelController();
