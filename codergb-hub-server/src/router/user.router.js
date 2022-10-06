const KoaRouter = require("koa-router");
const userRouter = new KoaRouter({prefix:"/user"});
const { authVerify } = require("../middleware/login.middleware");
const { userAvatarUpload } = require("../middleware/file.middleware");
const { uploadAvatar,getUserAvatar, deleteAvatar ,updateAvatar } = require("../controller/user.controller");
//上传头像
userRouter.post("/avatar/upload",authVerify,userAvatarUpload,uploadAvatar);
//获取用户头像
userRouter.get("/avatar/:userId",getUserAvatar);
//更换用户头像
userRouter.post("/avatar/update/:userId",authVerify,deleteAvatar,userAvatarUpload,updateAvatar)
module.exports = userRouter;
