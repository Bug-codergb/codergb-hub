const KoaRouter = require("koa-router");
const notifyRouter = new KoaRouter({prefix:'/notify'});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  allNotify,
  getAllNotify
} = require("../controller/notify.controller");
notifyRouter.post("/",authVerify,create);
//获取所有用户通知
notifyRouter.get("/all/:id",authVerify,allNotify)
notifyRouter.post("/all",authVerify,getAllNotify);
module.exports = notifyRouter;
