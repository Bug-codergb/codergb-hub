const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getSubService,
  cancelService,
  userSubService,
  getSubCountService
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
        if(userId === upId){
          setResponse(ctx,"error",400,{})
        }else{
          const sub = await getSubService(ctx,userId,upId)
          if(sub && sub.length!==0){
            const result = await cancelService(ctx,userId,upId);
            if(result){
              setResponse(ctx,"success",200,{})
            }
          }else{
            setResponse(ctx,"您还未订阅",400,{})
          }
        }

      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async userSub(ctx,next){
    try{
      const {offset="0",limit="30"}=ctx.query;
      const {id} = ctx.params;
      const result = await userSubService(ctx,id,offset,limit);
      if(result){
        setResponse(ctx,"success",200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getSubCount(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await getSubCountService(ctx,id);
      if(result!==null && result!==undefined){
        setResponse(ctx,"success",200,result);
      }
    }catch (e){
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new SubscriberController()
