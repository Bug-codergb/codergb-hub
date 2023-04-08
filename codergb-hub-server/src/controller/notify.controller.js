const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService
} = require("../service/notify.service");
class NotifyController{
  async create(ctx,next){
    try{
      const {
        content,userId,operation,
      } = ctx.request.body;
      if(!isEmpty(ctx,content,"通知内容不能为空") && !isEmpty(ctx,userId,"通知用户不能为空")&&
         !isEmpty(ctx,operation,"操作人不能为空")){
        const result =await createService(ctx,content,userId,operation);
        if(result){
          setResponse(ctx,"success",200,result);
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports =  new NotifyController();
