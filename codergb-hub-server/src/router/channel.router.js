const KoaRouter = require('koa-router');
const channelRouter = new KoaRouter({prefix:"/channel"});
const { authVerify } = require("../middleware/login.middleware");
const { channelAvatarUpload } = require("../middleware/file.middleware");
const {
  createChannel,
  uploadAvatar,
  getAvatar,
  updateAvatar,
  deleteAvatar,
  userChannel,
  getAllChannel
} = require("../controller/channel.controller")
channelRouter.post("/:id",authVerify,createChannel);
//上传频道头像(作废)
channelRouter.post("/avatar/upload",authVerify,channelAvatarUpload,uploadAvatar);
//获取用户频道
channelRouter.get("/user/:id",authVerify,userChannel);
//获取所有频道
channelRouter.get("/all",authVerify,getAllChannel);
module.exports = channelRouter
