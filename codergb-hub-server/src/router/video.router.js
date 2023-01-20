const KoaRouter = require("koa-router");
const videoRouter = new KoaRouter({prefix:"/video"});
const { authVerify } = require("../middleware/login.middleware");
const { videoUpload } = require("../middleware/file.middleware")
const {
  uploadVideo,
  mergeVideo,
  createVideo,
  allVideo,
  getVideoURL,
  getVideoDetail,
  getSubUserVio,
  getThumbUserVio,
  getSimilarVideo
} = require("../controller/video.controller")
//视频上传文件信息
videoRouter.post("/upload",authVerify,videoUpload,uploadVideo);
//videoRouter.post("/merge",authVerify,mergeVideo);
//视频创建(数据库信息)
videoRouter.post("/create",authVerify,createVideo);
//获取所有视频
videoRouter.get("/all",authVerify,allVideo);
//获取视频URL
videoRouter.get("/url/:id",authVerify,getVideoURL);
//获取视频详情
videoRouter.post("/detail/:id",authVerify,getVideoDetail);
//获取订阅用户视频
videoRouter.post("/sub/user/:id",authVerify,getSubUserVio);
//获取用户点赞视频
videoRouter.post("/thumb/user/:id" , authVerify,getThumbUserVio);
//获取相关视频
videoRouter.post("/similar/:id",authVerify,getSimilarVideo);
module.exports = videoRouter;
