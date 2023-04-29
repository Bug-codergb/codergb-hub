const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getAllCateService,
  getExploreService,
  deleteCateService
} = require("../service/category.service");
class CategoryController{
  async create(ctx,next){
    try{
      const { name } = ctx.request.body;
      if(!isEmpty(ctx,name,"分类名称不能为空")){
        const result = await createService(ctx,name);
        if(result){
          setResponse(ctx,"success",200,{});
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAllCate(ctx,next){
    try{
      const { offset="0",limit="30",keyword="" } = ctx.query;
      const result = await getAllCateService(ctx,offset,limit,keyword);
      setResponse(ctx,"success",200,result)
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getExplore(ctx,next){
    try{
      const result = await getExploreService();
      if(result){
        setResponse(ctx,"success",200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteCate(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await deleteCateService(ctx,id);
      setResponse(ctx,"success",200,result)
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new CategoryController();
