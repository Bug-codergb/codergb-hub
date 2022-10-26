const KoaRouter = require("koa-router");
const videoRouter = new KoaRouter({prefix:"/video"});
const { authVerify } = require("../middleware/login.middleware");
const { videoUpload } = require("../middleware/file.middleware")
const {
  uploadVideo,
  mergeVideo,
  createVideo
} = require("../controller/video.controller")
//视频上传文件信息
videoRouter.post("/upload",authVerify,videoUpload,uploadVideo);
//videoRouter.post("/merge",authVerify,mergeVideo);
//视频创建(数据库信息)
videoRouter.post("/create",authVerify,createVideo)
module.exports = videoRouter;
