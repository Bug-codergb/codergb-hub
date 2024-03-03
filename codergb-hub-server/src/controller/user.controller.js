const path =require('path');
const { setResponse } = require("../utils/setResponse");
const { setImgPrev } = require("../utils/setImgPrev");
const { judgeFile } = require("../utils/judgeFile");
const { deleteFile } = require("../utils/deleteFile")
const {
  uploadAvatarService,
  getUserMsgService,
  userMsgService,
  userVideoService,
  getAllUserService,
  getUSerLibService,
  userHotVideo,
  createUserService,
  getBriefService,
  updateUserService,
  getUserFansService
} = require("../service/user.service");
const { addChannelService } = require("../service/register.service.js")
const {APP_HOST,APP_PORT} = require("../app/config")
const {isEmpty} = require("../utils/isEmpty");
class UserController{
  async uploadAvatar(ctx,next){
    try{
      if(ctx.req.file && Object.keys(ctx.req.file)){
        const {userId}=ctx.params;
        const {mimetype,destination,filename,originalname, size} = ctx.req.file;
        const avatarUrl = `${APP_HOST}:${APP_PORT}/user/avatar/${userId}`;
        const result = await uploadAvatarService(ctx,userId,avatarUrl,mimetype,destination,filename, size,originalname);
        if(result){
          setResponse(ctx,"用户头像上传成功",200,{
            mimetype,destination,filename,originalname, size,
            avatarUrl
          });
        }
      }else{
        setResponse(ctx,'上传文件不能为空',400);
      }
    }catch (e) {
      setResponse(ctx,"error",500)
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
  async userVideo(ctx,next){
    try{
      const { id } = ctx.params;
      const { offset ="0",limit="30"}= ctx.query;
      const {keyword = ""} = ctx.request.body;
      const result = await userVideoService(ctx,id,offset,limit,keyword);
      if(result){
        setResponse(ctx,"success",200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  async userHotVideo(ctx,next){
    try{
      const { id } = ctx.params;

      const { offset ="0",limit="30"}= ctx.query;
      const {keyword = ""} = ctx.request.body;
      const result = await userHotVideo(ctx,id,offset,limit,keyword);
      if(result){
        setResponse(ctx,"success",200,result)
      }
    }catch (e) {

    }
  }
  async getAllUser(ctx,next){
    try{
      const { offset="0" ,limit="30",isExplore = -1 } = ctx.request.query;
      const {keyword=""} = ctx.request.body;
      const result = await getAllUserService(ctx,offset,limit,isExplore,keyword);
      if(result){
        setResponse(ctx,"success",200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  async getUSerLib(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await getUSerLibService(ctx,id);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  async createUser(ctx,next){
    try{

      const {
        userId='',
        userName,
        password,
        history,
        isExplore,
        mimetype,
        destination,
        filename,
        originalname,
        size,
        avatarUrl
      } = ctx.request.body;
      if(!isEmpty(ctx,userName,"用户名称不能为空")
        && !isEmpty(ctx,password,"密码不能为空")
        && !isEmpty(ctx,isExplore,"是否为探索不能为空")
        && !isEmpty(ctx,history,"存储历史不能为空")
        && !isEmpty(ctx,userId,"用户id不能为空")
      ){
        if(userId.length<10){
          setResponse(ctx,"userId不合法",400,{})
          return 0;
        }else{
          const isExists = await getBriefService(ctx,userId);
          if(isExists.length===0){
            const res = await createUserService(ctx,userId,userName,password,history,isExplore,mimetype,destination,filename,originalname, size,avatarUrl);
            if(res){
              await addChannelService(ctx,userId,userName);
              setResponse(ctx,"用户添加成功",200,{})
            }
          }else{
            setResponse(ctx,"请勿重复添加用户",400,{})
          }

        }
      }
    }catch (e) {

    }
  }
  async updateUser(ctx,next){
    try{
      const {
        userId,
        userName,
        password,
        history,
        isExplore,
        mimetype,
        destination,
        filename,
        originalname,
        size,
        avatarUrl
      } = ctx.request.body;
      if(!isEmpty(ctx,userName,"用户名称不能为空")
        && !isEmpty(ctx,password,"密码不能为空")
        && !isEmpty(ctx,isExplore,"是否为探索不能为空")
        && !isEmpty(ctx,history,"存储历史不能为空")
        && !isEmpty(ctx,userId,"用户id不能为空")
        && !isEmpty(ctx,avatarUrl,"用户头像不能为空")
      ){
        const result = await updateUserService(
          ctx,
          userId,
          userName,
          password,
          history,
          isExplore,
          mimetype,
          destination,
          filename,
          originalname,
          size,
          avatarUrl
        );
        if(result){
          setResponse(ctx,"success",200,{});
        }
      }
    }catch (e) {

    }
  }
  async getUserFans(ctx,next){
    try{
      const {id} = ctx.params;
      const {offset="0",limit="30"} = ctx.query;
      const result = await getUserFansService(ctx,id,offset,limit);
      setResponse(ctx,"success",200,result);
    }catch (e) {

    }
  }
}
module.exports = new UserController();
