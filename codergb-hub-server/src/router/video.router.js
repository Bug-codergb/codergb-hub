const KoaRouter = require("koa-router");
const videoRouter = new KoaRouter({prefix:"/video"});
const { authVerify } = require("../middleware/login.middleware");
const { videoUpload } = require("../middleware/file.middleware")
const {
  uploadVideo,
  mergeVideo
} = require("../controller/video.controller")
videoRouter.post("/upload",authVerify,videoUpload,uploadVideo);
videoRouter.post("/merge",authVerify,mergeVideo)
module.exports = videoRouter;
