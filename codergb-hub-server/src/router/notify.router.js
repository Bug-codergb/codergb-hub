const KoaRouter = require("koa-router");
const notifyRouter = new KoaRouter({prefix:'/notify'});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create
} = require("../controller/notify.controller");
notifyRouter.post("/",authVerify,create);
module.exports = notifyRouter;
