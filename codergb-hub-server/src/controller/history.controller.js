const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createHistoryService,
  judgeUserHistoryService,
  updateHistoryService,
  userHistoryService,
  deleteAllService,
  updateUserHistoryService

} = require("../service/history.service");
const { getUserMsgService } = require("../service/login.service")
class HistoryController{
  async createHistory(ctx,next){
    try{
      const { id } = ctx.params;
      const {userId} = ctx.user;
      const userInfo = await getUserMsgService(ctx,userId);

      if(userInfo && userInfo[0]){
        const {history} = userInfo[0];
        if(history ===0){
          setResponse(ctx,"已暂停观看记录",200,{});
          return;
        }
      }
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
      setResponse(ctx,'error',500,{});
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
  async updateHistory(ctx,next){
    try{
      const {history} = ctx.request.body;
      if(history!==0 && history!==1){
        setResponse(ctx,"参数错误",200,{})
      }else{
        const {id} = ctx.params;
        const result = await updateUserHistoryService(ctx,id,history);
        setResponse(ctx,"success",200,{})
      }
    }catch (e) {

    }
  }
}

module.exports = new HistoryController();
