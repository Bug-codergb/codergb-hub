const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  addVideoService,
  allCollectionService,
  getColDetailService,
  delColVideoService,
  getUserColService,
  deleteColService
} = require("../service/collection.service");
const {
  getColVideoCountService
} = require("../service/video.service");
class CollectionController{
  async create(ctx,next){
    try{
      const { name,cover,userId,description } = ctx.request.body;
      if(!isEmpty(ctx,name,"名称不能为空") &&
         !isEmpty(ctx,cover,"封面不能为空") &&
          !isEmpty(ctx,userId,"用户ID不能为空") &&
      !isEmpty(ctx,description,'简介不能为空')){
        const result = await createService(ctx,name,cover,userId,description);
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
         !isEmpty(ctx,cId,"视频集合ID不能为空")){
        if(!Array.isArray(vId) || vId.length === 0){
          setResponse(ctx,"视频ID集合不能为空",400,{})
        }else{
          let flag = true;
          for(let item of vId){
            if(!item.hasOwnProperty('sort')){
              setResponse(ctx,"视频序号不能为空",400, {});
              flag = false;
              break;
              return ;
            }
            if(!item.hasOwnProperty('id')){
              setResponse(ctx,"视频ID不能为空",400, {});
              flag = false;
              break;
              return ;
            }
          }
          if(flag){
            console.log(cId,vId);
            const result = await addVideoService(ctx,vId,cId);
            setResponse(ctx,"success",200, {});
          }else{
            setResponse(ctx,"视频ID或者sort不能为空",400, {});
          }
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allCollection(ctx,next){
    try{
      const { offset="0",limit="30",keyword="" } = ctx.query;
      const result = await allCollectionService(ctx,offset,limit,keyword);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getColDetail(ctx,next){
    try{
      const { id } = ctx.params;
      const result = await getColDetailService(ctx,id);
      if(result){
        setResponse(ctx,"success",200,result[0]);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async delColVideo(ctx,next){
    try{
      const { cId,vId } = ctx.params;
      const result = await delColVideoService(ctx,cId,vId);
      if(result){
        setResponse(ctx,"success",200, {});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getUserCol(ctx,next){
    try{
      const {  offset="0",limit="30"} = ctx.query;
      const  { id } = ctx.params;
      const result = await getUserColService(ctx,id,offset,limit);
      if(result){
        for(let item of result.list){
         let count = await getColVideoCountService(ctx,item.id,'',[],'');
         item.count = count[0].count;
        }
        setResponse(ctx,"success",200, result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteCol(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await deleteColService(ctx,id);
      setResponse(ctx,"success",200, result);
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new CollectionController();
