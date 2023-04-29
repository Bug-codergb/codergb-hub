const { setResponse } =require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getAllTagService,
  deleteTagService
} = require("../service/tag.service");
class TagController{
  async create(ctx,next){
     try{
       const { name } = ctx.request.body;
       if(!isEmpty(ctx,name,"标签名称不能为空")){
         const result = await createService(ctx,name);
         if(result){
           setResponse(ctx,"success",200,{})
         }else{

         }
       }
     }catch (e) {
        setResponse(ctx,e.message,500,{})
     }
  }
  //获取所有tag
  async getAllTag(ctx,next){
    try{
      const {offset="0",limit="30",keyword=''} = ctx.query;
      const result = await getAllTagService(ctx,offset,limit,keyword);
      if(result){
        setResponse(ctx,"success",200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async deleteTag(ctx,next){
    try{
      const {id} = ctx.params;
      console.log(id);
      const result = await deleteTagService(ctx,id);
      setResponse(ctx,"success",200,result)
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new TagController();
