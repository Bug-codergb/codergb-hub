const KoaRouter = require('koa-router');
const momentRouter = new KoaRouter({prefix:"/moment"});
const { authVerify } = require("../middleware/login.middleware");
const {
  create,
  channelMoment,
  momentDetail,
  getAllMoment,
  deleteMoment,
  updateMoment
}=require("../controller/moment.controller")
momentRouter.post("/",authVerify,create);
//获取频道动态
momentRouter.post("/channel/:id",authVerify,channelMoment);
//获取所有动态
momentRouter.post("/list",authVerify,getAllMoment)
//获取动态详情
momentRouter.post("/:id",authVerify,momentDetail);
//删除动态
momentRouter.post("/delete/:id",authVerify,deleteMoment)
//新增动态
momentRouter.post("/update/:id",authVerify,updateMoment);
module.exports = momentRouter;
