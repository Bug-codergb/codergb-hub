const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createHistoryService,
  judgeUserHistoryService,
  updateHistoryService,
  userHistoryService,
  deleteAllService
} = require("../service/history.service");
class HistoryController{
  async createHistory(ctx,next){
    try{
      const { id } = ctx.params;
      const {userId} = ctx.user;
      const isExists = await judgeUserHistoryService(ctx,userId,id);
      if(isExists && isExists.length===0){
        const result = await createHistoryService(ctx,id,userId);
        if(result){
          setResponse(ctx,"success",200,{});
        }
      }else{
        let count = isExists[0].count;
        count++;
        const result = await updateHistoryService(ctx,count,userId,id);
        setResponse(ctx,"success",200,{});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async userHistory(ctx,next){
    try{
      const {userId} = ctx.params;
      let {offset="0",limit="30",keyword=""} = ctx.query;
      if(keyword==="%%") keyword = "";
      const result = await userHistoryService(ctx,userId,keyword,offset,limit);
      setResponse(ctx,"success",200,result);
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteAll(ctx,next){
    try{
      const {userId} = ctx.user;
      const result = await deleteAllService(ctx,userId);
      if(result){
        setResponse(ctx,"success",200,{});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new HistoryController();
