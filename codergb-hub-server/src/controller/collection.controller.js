const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  addVideoService
} = require("../service/collection.service");
class CollectionController{
  async create(ctx,next){
    try{
      const { name,cover } = ctx.request.body;
      if(!isEmpty(ctx,name,"名称不能为空") &&
         !isEmpty(ctx,cover,"封面不能为空")){
        const result = await createService(ctx,name,cover);
        if(result){
          setResponse(ctx,"success",200,result);
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async addVideo(ctx,next){
    try{
      const { vId,cId,sort } = ctx.request.body;
      if(!isEmpty(ctx,vId,"视频ID不能为空") &&
         !isEmpty(ctx,cId,"视频集合ID不能为空") &&
         !isEmpty(ctx,sort,"请添加视频序号")){
        const result = await addVideoService(ctx,vId,cId,sort);
        if(result){
          setResponse(ctx,"success",200,result);
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new CollectionController();
