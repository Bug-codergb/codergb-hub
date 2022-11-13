const KoaRouter = require("koa-router");
const userRouter = new KoaRouter({prefix:"/user"});
const { authVerify } = require("../middleware/login.middleware");
const { userAvatarUpload } = require("../middleware/file.middleware");
const {
  uploadAvatar,
  getUserAvatar,
  deleteAvatar ,
  updateAvatar ,
  userMsg,
  userVideo
} = require("../controller/user.controller");
//上传头像
userRouter.post("/avatar/upload",authVerify,userAvatarUpload,uploadAvatar);
//获取用户头像
userRouter.get("/avatar/:userId",getUserAvatar);
//更换用户头像
userRouter.post("/avatar/update/:userId",authVerify,deleteAvatar,userAvatarUpload,updateAvatar);
//获取用户msg（类似于详情）
userRouter.post("/msg/:id",authVerify,userMsg);
//获取用户视频
userRouter.post("/video/:id",authVerify,userVideo);
module.exports = userRouter;
