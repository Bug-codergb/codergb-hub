const {isEmpty} = require("../utils/isEmpty");
const { addTime } = require("../utils/addTime")
const {setResponse} = require("../utils/setResponse");
const {
  createService,
  videoDmService
} = require("../service/dm.service");
class DmController{
  async create(ctx,next){
    try{
      const {vId,text,time} = ctx.request.body;
      const {userId} = ctx.user;
      if(!isEmpty(ctx,vId,"视频ID不能为空") && !isEmpty(ctx,text,"弹幕内容不能为空")
         &&!isEmpty(ctx,time,"时间不能为空")){
        let newTime = addTime(time);
        const result = await createService(ctx,vId,text,newTime,userId);
        if(result){
          setResponse(ctx,"success",200,result[0]);
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async videoDm(ctx,next){
    try{
      const {vId} = ctx.params;
      const result = await videoDmService(ctx,vId);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new DmController();
