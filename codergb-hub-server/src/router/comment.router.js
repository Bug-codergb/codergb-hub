const KoaRouter = require("koa-router");
const commentRouter = new KoaRouter({prefix:"/comment"});
const {
  authVerify
}= require("../middleware/login.middleware");
const {
  create,
  reply,
  allComment,
  allReply,
  sysComment,
  deleteCom
}=require("../controller/comment.controller");
commentRouter.post("/",authVerify,create);
//评论回复
commentRouter.post("/reply/:id",authVerify,reply);
//获取所有评论
commentRouter.get("/all/:id",authVerify,allComment);
//获取所有评论回复
commentRouter.get("/reply/all/:id",authVerify,allReply);
//获取系统所有评论
commentRouter.post("/all",authVerify,sysComment);
commentRouter.post("/delete/:id",authVerify,deleteCom);
module.exports = commentRouter;
