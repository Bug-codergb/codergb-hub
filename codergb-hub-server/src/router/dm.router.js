const KoaRouter = require("koa-router");
const dmRouter = new KoaRouter({prefix:"/dm"});
const {
  authVerify
} = require("../middleware/login.middleware")
const {
  create,
  videoDm
} = require("../controller/dm.controller");
dmRouter.post("/",authVerify,create);
dmRouter.post("/video/:vId",authVerify,videoDm);//获取视频弹幕
module.exports = dmRouter
