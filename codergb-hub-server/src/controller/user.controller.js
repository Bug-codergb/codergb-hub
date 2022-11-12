const path =require('path');
const { setResponse } = require("../utils/setResponse");
const { setImgPrev } = require("../utils/setImgPrev");
const { judgeFile } = require("../utils/judgeFile");
const { deleteFile } = require("../utils/deleteFile")
const {
  uploadAvatarService,
  getUserMsgService,
  userMsgService
} = require("../service/user.service");
const {APP_HOST,APP_PORT} = require("../app/config")
class UserController{
  async uploadAvatar(ctx,next){
    try{
      if(ctx.req.file && Object.keys(ctx.req.file)){
        const {userId}=ctx.user;
        const {mimetype,destination,filename,originalname, size} = ctx.req.file;
        const avatarUrl = `${APP_HOST}:${APP_PORT}/user/avatar/${userId}`;
        const result = await uploadAvatarService(ctx,userId,avatarUrl,mimetype,destination,filename, size,originalname);
        if(result){
          setResponse(ctx,"用户头像上传成功",200);
        }
      }else{
        setResponse(ctx,'上传文件不能为空',400);
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  //获取用户头像(预览)
  async getUserAvatar(ctx,next){
    try{
      const {userId}=ctx.params;
      const result = await getUserMsgService(ctx,userId);
      if(result && result.length!==0){
        const userMsg = result[0];
        const {mimetype,filename,dest} = userMsg;
        await setImgPrev(ctx, `${dest}/${filename}`, mimetype);
      }else if(result && result.length===0){
        setResponse(ctx,"文件不存在",400)
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  //删除用户头像
  async deleteAvatar(ctx,next){
    try{
      const { userId } = ctx.params;
      const result = await getUserMsgService(ctx,userId);
      if(result && result.length!==0){
        const userMsg = result[0];
        const {filename,dest} = userMsg;
        const isExists = await judgeFile(path.resolve(__dirname,"../../",`${dest}/${filename}`));
        if(isExists){
          await deleteFile(path.resolve(__dirname,"../../",`${dest}/${filename}`))
          await next();
        }else{
          await next();
        }
      }else{
        setResponse(ctx,"文件不存在",400)
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  //更换用户头像
  async updateAvatar(ctx,next){
    try{
      if(ctx.req.file && Object.keys(ctx.req.file)){
        const { userId } = ctx.params;
        const {mimetype,destination,filename,originalname, size} = ctx.req.file;
        const avatarUrl = `${APP_HOST}:${APP_PORT}/user/avatar/${userId}`;
        const result = await uploadAvatarService(ctx,userId,avatarUrl,mimetype,destination,filename, size,originalname);
        if(result){
          setResponse(ctx,"用户头像更新成功",200);
        }
      }else{
        setResponse(ctx,'上传文件不能为空',400);
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  async userMsg(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await userMsgService(ctx,id);
      if(result){
        setResponse(ctx,"success",200,result[0])
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
}
module.exports = new UserController();
