const KoaRouter = require("koa-router");
const notifyRouter = new KoaRouter({prefix:'/notify'});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  allNotify
} = require("../controller/notify.controller");
notifyRouter.post("/",authVerify,create);
notifyRouter.get("/all/:id",authVerify,allNotify)
module.exports = notifyRouter;
