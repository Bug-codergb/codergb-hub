const Router = require("koa-router");
const videoRouter = new Router();
const { authVerify } = require("../middleware/login.middleware");
const {
  mergeVideo
} =require("../controller/video.controller");
videoRouter.all("/video/merge",mergeVideo)
module.exports = videoRouter;
