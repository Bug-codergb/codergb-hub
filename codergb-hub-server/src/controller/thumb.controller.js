const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getThumbService,
  cancelService,
  createTreadService,
  cancelTreadService,
  getVideoThumbService
}=require("../service/thumb.service");
const {
  createService:insertService,
  deleteNotifyByMsg
} = require("../service/notify.service")
class ThumbController{
  async create(ctx,next){
    try{
      const {
        alias,id
      } = ctx.request.body;
      const { userId } = ctx.user;
      if(!isEmpty(ctx,alias,"别名不能为空")&&!isEmpty(ctx,id,"id不能为空")){
        const thumbData = await getThumbService(ctx,alias,id,userId,0);
        if(thumbData && thumbData.length===0){
          const tread = await getThumbService(ctx,alias,id,userId,1);
          if(tread){
            await cancelTreadService(ctx,alias,id,userId,1)

          }
          const result = await createService(ctx,alias,id,userId,0);
          if(result){
            insertService(ctx,"点赞了",null,userId,`thumb-${alias}`,id);
            setResponse(ctx,"success",200,{});
          }
        }else{
          setResponse(ctx,"您已点赞",400,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async cancel(ctx,next){
    try{
      const {
        alias,id
      } = ctx.request.body;
      const { userId } = ctx.user;
      if(!isEmpty(ctx,alias,"别名不能为空")&&!isEmpty(ctx,id,"id不能为空")){
        const thumbData = await getThumbService(ctx,alias,id,userId,0);
        if(thumbData && thumbData.length!==0){
          const result = await cancelService(ctx,alias,id,userId,0);
          if(result){
            deleteNotifyByMsg(ctx,userId,id,'thumb');
            setResponse(ctx,"success",200,{});
          }
        }else{
          setResponse(ctx,"您未点赞",400,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async createTread(ctx,next){
    try{
      const {
        alias,id
      } = ctx.request.body;
      const { userId } = ctx.user;
      if(!isEmpty(ctx,alias,"别名不能为空")&&!isEmpty(ctx,id,"id不能为空")){
        const thumbData = await getThumbService(ctx,alias,id,userId,1);
        if(thumbData && thumbData.length===0){
          const thumb = await getThumbService(ctx,alias,id,userId,0);//踩之前判断是否点赞
          if(thumb){
            await cancelService(ctx,alias,id,userId,0)
          }
          const result = await createTreadService(ctx,alias,id,userId,1)
          if(result){
            deleteNotifyByMsg(ctx,userId,id,'thumb');
            setResponse(ctx,"success",200,{});
          }
        }else{
          setResponse(ctx,"已踩",400,{});
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async cancelTread(ctx,next){
    try{
      const {
        alias,id
      } = ctx.request.body;
      const { userId } = ctx.user;
      if(!isEmpty(ctx,alias,"别名不能为空")&&!isEmpty(ctx,id,"id不能为空")){
        const thumbData = await getThumbService(ctx,alias,id,userId,1);
        if(thumbData && thumbData.length!==0){
          const result = await cancelTreadService(ctx,alias,id,userId,1);
          if(result){
            setResponse(ctx,"success",200,{});
          }
        }else{
          setResponse(ctx,"未踩",400,{});
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getVideoThumb(ctx,next){
    try{
      const {id}=ctx.params;
      const result = await getVideoThumbService(ctx,id);
      console.log(result);
      if(result){
        const res = result.length==0?{count:0}:result[0];
        setResponse(ctx,"success",200,res);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new ThumbController()
