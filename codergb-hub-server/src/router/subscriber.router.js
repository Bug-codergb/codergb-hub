const KoaRouter = require("koa-router");
const subRouter = new KoaRouter({prefix:"/sub"})
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  cancel,
  userSub,
  getSubCount
} = require("../controller/subscriber.controller");
//订阅
subRouter.post("/",authVerify,create);
//取消订阅
subRouter.post("/cancel",authVerify,cancel);
//获取用户订阅人
subRouter.post("/user/:id",authVerify,userSub);
subRouter.get("/count/:id",authVerify,getSubCount)
module.exports  = subRouter;
