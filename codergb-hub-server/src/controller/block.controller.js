const { isEmpty } = require("../utils/isEmpty");
const { setResponse } = require("../utils/setResponse");
const {
  createService,
  allBlockService,
  userAddBlockService,
  userDelBlockService,
  getUserBlockService,
  getUserBlockDetail
}= require("../service/block.service");
class BlockController{
  async create(ctx,next){
    try{
      const { name,description } = ctx.request.body;
      if(!isEmpty(ctx,name,"板块名称不能为空",)){
        const result = await createService(ctx,name,description);
        if(result){
          setResponse(ctx,"success",200,{});
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //所有板块
  async allBlock(ctx,next){
    try{
      const result = await allBlockService(ctx);
      setResponse(ctx,"success",200,result);
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async userAddBlock(ctx,next){
    try{
      const {userId} = ctx.user;
      const {blockId} = ctx.request.body;

      const isExists = await getUserBlockDetail(ctx,userId,blockId);
      if(isExists && isExists.length!==0){
        setResponse(ctx,"已添加当前板块",200,{})
        return;
      }
      
      if(!isEmpty(ctx,blockId,"板块ID不能为空")){
        const result = await userAddBlockService(ctx,userId,blockId);
        if(result){
          setResponse(ctx,"success",200,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async userDelBlock(ctx,next){
    try{
      const {blockId,userId} = ctx.request.body;
      if(!isEmpty(ctx,blockId,"板块ID不能为空") && !isEmpty(ctx,userId,"用户ID不能为空")){
        const result = await userDelBlockService(ctx,userId,blockId);
        if(result){
          setResponse(ctx,"success",200,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getUserBlock(ctx,next){
    try{
      const {userId} = ctx.params;
      const result = await getUserBlockService(ctx,userId);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new BlockController();
