const KoaRouter = require("koa-router");
const dashboardRouter = new KoaRouter({prefix:"/dashboard"});
const {
  authVerify
} = require("../middleware/login.middleware")
const {
  dataAnalysis,
  getUserWorks
} = require("../controller/dashboard.controller.js");
dashboardRouter.get("/data-analysis",authVerify,dataAnalysis)
dashboardRouter.get("/user-works",authVerify,getUserWorks);
module.exports = dashboardRouter;
