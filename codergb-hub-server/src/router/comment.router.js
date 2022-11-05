const KoaRouter = require("koa-router");
const commentRouter = new KoaRouter({prefix:"/comment"});
const {
  authVerify
}= require("../middleware/login.middleware");
const {
  create,
  reply,
  allComment,
  allReply
}=require("../controller/comment.controller");
commentRouter.post("/",authVerify,create);
//评论回复
commentRouter.post("/reply/:id",authVerify,reply);
//获取所有评论
commentRouter.get("/all/:id",authVerify,allComment);
//获取所有评论回复
commentRouter.get("/reply/all/:id",authVerify,allReply);
module.exports = commentRouter;
