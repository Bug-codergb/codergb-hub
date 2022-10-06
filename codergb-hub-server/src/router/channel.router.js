const KoaRouter = require('koa-router');
const channelRouter = new KoaRouter({prefix:"/channel"});
const { authVerify } = require("../middleware/login.middleware");
const { channelAvatarUpload } = require("../middleware/file.middleware");
const {
  createChannel,
  uploadAvatar,
  getAvatar,
  updateAvatar,
  deleteAvatar
} = require("../controller/channel.controller")
channelRouter.post("/",authVerify,createChannel);
//上传频道头像
channelRouter.post("/avatar/upload/:id",authVerify,channelAvatarUpload,uploadAvatar);
//获取频道头像
channelRouter.get("/avatar/:id",getAvatar);
//更换频道头像
channelRouter.post("/avatar/update/:id",authVerify,deleteAvatar,channelAvatarUpload,updateAvatar);
module.exports = channelRouter
