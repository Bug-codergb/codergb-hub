const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getThumbService,
  cancelService
}=require("../service/thumb.service");
class ThumbController{
  async create(ctx,next){
    try{
      const {
        alias,id
      } = ctx.request.body;
      const { userId } = ctx.user;
      if(!isEmpty(ctx,alias,"别名不能为空")&&!isEmpty(ctx,id,"id不能为空")){
        const thumbData = await getThumbService(ctx,alias,id,userId);
        if(thumbData && thumbData.length===0){
          const result = await createService(ctx,alias,id,userId);
          if(result){
            setResponse(ctx,"success",200,{});
          }
        }else{
          setResponse(ctx,"您已点赞",400,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async cancel(ctx,next){
    try{
      const {
        alias,id
      } = ctx.request.body;
      const { userId } = ctx.user;
      if(!isEmpty(ctx,alias,"别名不能为空")&&!isEmpty(ctx,id,"id不能为空")){
        const thumbData = await getThumbService(ctx,alias,id,userId);
        if(thumbData && thumbData.length!==0){
          const result = await cancelService(ctx,alias,id,userId);
          if(result){
            setResponse(ctx,"success",200,{});
          }
        }else{
          setResponse(ctx,"您未点赞",400,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new ThumbController()
