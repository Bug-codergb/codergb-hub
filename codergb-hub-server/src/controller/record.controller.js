const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getVideoService,
  updateCountService
}=require("../service/record.service");
const moment = require("moment");
class RecordController{
  async create(ctx,next){
    try{
      const { vId } = ctx.params;
      const {userId} = ctx.user;
      const time = moment(new Date()).subtract(5,"days").format("yyyy-MM-DD");
      const count = await getVideoService(vId,userId,time);
      let num = 0;
      if(!count||!count[0]){
        num=1;
        const result = await createService(ctx,vId,userId,num,time);

        if(result){
          setResponse(ctx,"success",200,result);
        }else{
          setResponse(ctx,"error",500,{})
        }
      }else {
        num = count[0].count ?? 0;
        const result = await updateCountService(ctx, vId, userId, Number(num) + 1,count[0].createTime);
        if(result){
          setResponse(ctx,"success",200,result);
        }else{
          setResponse(ctx,"error",500,{})
        }
      }

    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}
module.exports = new RecordController()
