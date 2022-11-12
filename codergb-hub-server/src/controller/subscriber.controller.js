const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getSubService,
  cancelService
} = require("../service/subscriber.service")
class SubscriberController{
  async create(ctx,next){
    try{
      const {userId} = ctx.user;
      const {upId=""} = ctx.request.body;
      if(!isEmpty(ctx,upId,"订阅用户ID不能为空")){
        const sub = await getSubService(ctx,userId,upId)
        if(sub && sub.length===0){
          const result = await createService(ctx,upId,userId);
          if(result){
            setResponse(ctx,"success",200,{})
          }
        }else{
          setResponse(ctx,"您已订阅",400,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //取消订阅
  async cancel(ctx,next){
    try{
      const {userId} = ctx.user;
      const {upId=""} = ctx.request.body;
      if(!isEmpty(ctx,upId,"订阅用户ID不能为空")){
        const sub = await getSubService(ctx,userId,upId)
        if(sub && sub.length!==0){
          const result = await cancelService(ctx,upId,userId);
          if(result){
            setResponse(ctx,"success",200,{})
          }
        }else{
          setResponse(ctx,"您还未订阅",400,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new SubscriberController()
