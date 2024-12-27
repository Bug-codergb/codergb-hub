const {isEmpty} = require("../utils/isEmpty");
const { addTime } = require("../utils/addTime")
const {setResponse} = require("../utils/setResponse");
const {
  createService,
  videoDmService,
  allDmService,
  deleteDmService,
  updateDmService
} = require("../service/dm.service");
class DmController{
  async create(ctx,next){
    try{
      const {vId,text,time} = ctx.request.body;
      const {userId} = ctx.user;
      if(!isEmpty(ctx,vId,"视频ID不能为空") && !isEmpty(ctx,text,"弹幕内容不能为空")
         &&!isEmpty(ctx,time,"时间不能为空")){
        let newTime = time ? time + 1000 : 0;
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
      const { offset="0",limit="20000000" } = ctx.query;
      const result = await videoDmService(ctx,vId,offset,limit);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allDm(ctx,next){
    try{
      const { offset="0",limit="30",keyword="" } = ctx.query;
      const result = await allDmService(ctx,offset,limit,keyword);
      setResponse(ctx,'success',200,result);
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteDm(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await deleteDmService(ctx,id);
      if(result){
        setResponse(ctx,'success',200,{});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async updateDm(ctx,next){
    try{
      const {id} = ctx.params;
      const {content} = ctx.request.body;
      const result = await updateDmService(ctx,id,content);
      setResponse(ctx,"success",200,{})
    }catch (e) {

    }
  }
}
module.exports = new DmController();
