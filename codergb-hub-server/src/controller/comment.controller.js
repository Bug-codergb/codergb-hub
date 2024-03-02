const { setResponse } = require("../utils/setResponse");
const {
  createService,
  replyService,
  allCommentService,
  allReplyService,
  sysCommentService,
  deleteComService,
  userCommentService
}=require("../service/comment.service")
const {isEmpty} = require("../utils/isEmpty");
class CommentController{
  async create(ctx,next){
    try{
      const {userId} = ctx.user;
      const { content,alias,id } = ctx.request.body;
      if(!isEmpty(ctx,content,"评论内容不能为空")&&!isEmpty(ctx,alias,"别名不能为空")
         &&!isEmpty(ctx,id,"id不能为空")){
        const result = await createService(ctx,id,alias,content,userId);
        if(result){
          setResponse(ctx,"success",200,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async reply(ctx,next){
    try{
      const {id} = ctx.params;
      const {userId} = ctx.user;
      const {content=""} = ctx.request.body;
      if(!isEmpty(ctx,content,"回复内容不能为空")){
        const result = await replyService(ctx,id,content,userId);
        if(result){
          setResponse(ctx,"success",200,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async allComment(ctx,next){
    try{
      const {offset="0",limit="30",alias} = ctx.query;
      const {id} = ctx.params;
      if(!isEmpty(ctx,alias,"别名不能为空")){
        const result = await allCommentService(ctx,offset,limit,alias,id);
        if(result){
          setResponse(ctx,"success",200,result)
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async allReply(ctx,next){
    try{
      const { offset="0",limit="30" }=ctx.query;
      const { id}=ctx.params;
      const result = await allReplyService(ctx,offset,limit,id);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async sysComment(ctx,next){
    try{
      const { offset="0",limit="30",keyword="" } = ctx.query;
      const result = await sysCommentService(ctx,keyword,offset,limit);
      if(result){
        setResponse(ctx,'success',200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async deleteCom(ctx,next){
    try{
      const {id}  =ctx.params;
      const result = await deleteComService(ctx,id);
      if(result){
        setResponse(ctx,'success',200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async userComment(ctx,next){
    try{
      const {id} = ctx.params;
      const {offset="0",limit="30"} = ctx.query;
      const result= await userCommentService(ctx,id,offset,limit);
      if(result){
        setResponse(ctx,'success',200,result)
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new CommentController();
