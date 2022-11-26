const KoaRouter = require("koa-router");
const playlistRouter = new KoaRouter({prefix:"/playlist"});
const { authVerify } = require("../middleware/login.middleware");
const {
  create,
  getAllPlaylist,
  getUserPlaylist,
  addVideo
} = require("../controller/playlist.controller");
//创建播放列表
playlistRouter.post("/",authVerify,create);
//获取所有播放列表
playlistRouter.get("/all",authVerify,getAllPlaylist);
//获取用户播放列表
playlistRouter.get("/user/:id",authVerify,getUserPlaylist);
//将视频添加到播放列表
playlistRouter.post("/video",authVerify,addVideo);
module.exports = playlistRouter
