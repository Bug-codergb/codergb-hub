const { setResponse } = require("../utils/setResponse");
const {
  createService,
  getAlreadyLaterService,
  deleteLaterService
}=require("../service/later.service")
class LaterController{
  async create(ctx,next){
    try{
      const {id}  = ctx.params;
      const {userId} = ctx.user;
      const isExists = await getAlreadyLaterService(ctx,userId,id);
      if(isExists.length===0){
        const result = await createService(ctx,id,userId);
        if(result){
          setResponse(ctx,"success",200,{});
        }
      }else{
        setResponse(ctx,"视频已经加入到稍后观看",400,{});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async cancel(ctx,next){
    try{
      const {id}  = ctx.params;
      const {userId} = ctx.user;
      const isExists = await getAlreadyLaterService(ctx,userId,id);
      if(isExists.length!==0){
        const result = await deleteLaterService(ctx,userId,id);
        if(result){
          setResponse(ctx,"success",200,{});
        }
      }else{
        setResponse(ctx,"视频已从稍后观看中删除",400,{});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new LaterController();
