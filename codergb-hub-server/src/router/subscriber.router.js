const KoaRouter = require("koa-router");
const subRouter = new KoaRouter({prefix:"/sub"})
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  cancel
} = require("../controller/subscriber.controller");
//订阅
subRouter.post("/",authVerify,create);
//取消订阅
subRouter.post("/cancel",authVerify,cancel);
module.exports  = subRouter;
