const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const { setImgPrev } = require("../utils/setImgPrev");
const { deleteFileReq } = require("../utils/deleteFile")
const { APP_HOST,APP_PORT } = require("../app/config");
const { uploadHandle } = require("../utils/uploadHandle")
const {
  createChannelService,
  getChannelMsgService,
  uploadAvatarService,
  userChannelService
} = require("../service/channel.service");
class ChannelController{
  async createChannel(ctx,next){
    try{
      const { id } = ctx.params;
      const { name="",alias="",description="",official="",banner="",trailer="",userId="" } = ctx.request.body;
      let keys = Object.keys(ctx.request.body);
      const isAllEmpty = keys.every((item)=>{
        return ctx.request.body[item]!==0 && (ctx.request.body[item]===null || ctx.request.body[item].trim().length === 0);
      });
      if(isAllEmpty){
        setResponse(ctx,"频道更新参数不能为空",400,{});
      }else{
        const notNullKey = keys.filter((item,index)=>{
          return (ctx.request.body[item]===0 || (ctx.request.body[item]!==null
                 && (typeof ctx.request.body[item] ==="string" && ctx.request.body[item].trim().length!==0)))&& item!=='userId'
        })
        let params=[];
        for(let item of notNullKey){
          params.push({
            [item]:ctx.request.body[item]
          })
        }
        const result = await createChannelService(ctx,id,params);
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
  //获取用户频道
  async userChannel(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await userChannelService(ctx,id);
      if(result){
        setResponse(ctx,"success",200,result[0])
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }

}

module.exports = new ChannelController();
