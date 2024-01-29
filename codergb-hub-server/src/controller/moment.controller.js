const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  channelMomentService,
  momentDetailService,
  getAllMomentService,
  deleteMomentService
}=require("../service/moment.service");
class MomentController{
  async create(ctx,next){
    try{
      const { title,content,vid,cId } = ctx.request.body;
      const {userId} = ctx.user;
      if(!isEmpty(ctx,title,"动态标题不能为空")&&
         !isEmpty(ctx,content,"动态内容不能为空") &&
         !isEmpty(ctx,vid,"视频ID不能为空")&&
         !isEmpty(ctx,cId,"频道ID不能为空")){
        const result = await createService(ctx,title,content,vid,userId,cId);
        if(result){
          setResponse(ctx,"动态创建成功",200,{});
        }else{
          setResponse(ctx,e.message,500,{});
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //获取频道动态
  async channelMoment(ctx,next){
    try{
      const {offset="0",limit="30"} = ctx.query;
      const {id} = ctx.params;
      const result = await channelMomentService(ctx,offset,limit,id);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //获取动态详情
  async momentDetail(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await momentDetailService(ctx,id);
      if(result){
        setResponse(ctx,"success",200,result[0]);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAllMoment(ctx,next){
    try{
      let { offset="0",limit="12",keyword="" } = ctx.query;
      keyword = keyword.substring(0,40)
      const result = await getAllMomentService(ctx,offset,limit,keyword);

      if(result){
        setResponse(ctx,"success",200,result);
      }else{
        setResponse(ctx,"error",500,{});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteMoment(ctx,next){
    try{
      const { id } = ctx.params;
      const result = await deleteMomentService(ctx,id);
      setResponse(ctx,"success",200,{})
    }catch (e) {
      setResponse(ctx,"server error",500,{});
    }
  }
}

module.exports = new MomentController();
