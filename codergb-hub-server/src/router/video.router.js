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
  getSimilarVideo,
  getColVideo,
  getVideoSource,
  deleteVideo,
  deleteVideoSource,
  updateVideo,
  cateVideo,
  addPlayCount,
  getVideoChunk,
  addCarousel,
  deleteCarousel,
  getAllCarousel
} = require("../controller/video.controller")
//视频上传文件信息
videoRouter.post("/upload",authVerify,videoUpload,uploadVideo);
//videoRouter.post("/merge",authVerify,mergeVideo);
//视频创建(数据库信息)
videoRouter.post("/create",authVerify,createVideo);
//获取所有视频
videoRouter.post("/all",authVerify,allVideo);
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
//获取集合下视频
videoRouter.post("/collection/:id",authVerify,getColVideo);
//获取视频源文件
videoRouter.post("/source",authVerify,getVideoSource);
//获取视频切片
videoRouter.get("/chunk/:id",authVerify,getVideoChunk);
//删除
videoRouter.post("/delete/:id",authVerify,deleteVideo);
//删除文件切片
videoRouter.post("/source/delete/:name",authVerify,deleteVideoSource);
//视频更新
videoRouter.post("/update",authVerify,updateVideo);
//获取视频下分类
videoRouter.post("/cate/:id",authVerify,cateVideo);
videoRouter.post("/playCount/:id",authVerify,addPlayCount);
//添加视频轮播图
videoRouter.post("/carousel",authVerify,addCarousel);
//删除轮播图
videoRouter.post("/carousel/:id",authVerify,deleteCarousel);
videoRouter.get("/carousel/all",authVerify,getAllCarousel);
module.exports = videoRouter;
