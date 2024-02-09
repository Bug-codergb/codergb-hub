const KoaRouter = require("koa-router");
const dashboardRouter = new KoaRouter({prefix:"/dashboard"});
const {
  authVerify
} = require("../middleware/login.middleware")
const {
  dataAnalysis,
  getUserWorks,
  getCateVideo,
  getVideoAnalysis
} = require("../controller/dashboard.controller.js");
dashboardRouter.get("/data-analysis",authVerify,dataAnalysis)
dashboardRouter.get("/user-works",authVerify,getUserWorks);
dashboardRouter.get("/cate-video",authVerify,getCateVideo);
dashboardRouter.get("/video-analysis",authVerify,getVideoAnalysis);
module.exports = dashboardRouter;
