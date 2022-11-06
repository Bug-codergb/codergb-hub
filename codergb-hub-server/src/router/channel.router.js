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
//上传频道头像(作废)
channelRouter.post("/avatar/upload",authVerify,channelAvatarUpload,uploadAvatar);
module.exports = channelRouter
