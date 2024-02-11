const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  allNotifyService,
  getAllNotifyService
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
  async allNotify(ctx,next){
    try{
      const { offset='0',limit='30'} = ctx.query;
      const {id} = ctx.params;
      const result = await allNotifyService(ctx,id,offset,limit);

      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAllNotify(ctx,next){
    try{
      const { offset='0',limit='30'} = ctx.query;
      const result = await getAllNotifyService(ctx,offset,limit);
      setResponse(ctx,"success",200,result)
    }catch (e){

    }
  }
}

module.exports =  new NotifyController();
