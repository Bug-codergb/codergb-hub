const KoaRouter = require('koa-router');
const momentRouter = new KoaRouter({prefix:"/moment"});
const { authVerify } = require("../middleware/login.middleware");
const {
  create,
  channelMoment,
  momentDetail
}=require("../controller/moment.controller")
momentRouter.post("/",authVerify,create);
//获取频道动态
momentRouter.post("/channel/:id",authVerify,channelMoment);
//获取动态详情
momentRouter.post("/:id",authVerify,momentDetail);
module.exports = momentRouter;
