const KoaRouter = require("koa-router");
const playlistRouter = new KoaRouter({prefix:"/playlist"});
const { authVerify } = require("../middleware/login.middleware");
const {
  create,
  getAllPlaylist,
  getUserPlaylist,
  addVideo,
  playlistDetail,
  playlistVideo,
  subPlaylist,
  updatePlaylist,
  deletePlaylist
} = require("../controller/playlist.controller");
//创建播放列表
playlistRouter.post("/",authVerify,create);
//获取所有播放列表
playlistRouter.post("/all",authVerify,getAllPlaylist);
//获取用户播放列表
playlistRouter.get("/user/:id",authVerify,getUserPlaylist);
//将视频添加到播放列表
playlistRouter.post("/video",authVerify,addVideo);
//获取播放列表详情
playlistRouter.post("/:id",authVerify,playlistDetail);
//获取播放列表中视频
playlistRouter.post("/video/:id",authVerify,playlistVideo);
//收藏播放列表
playlistRouter.post("/sub/:id",authVerify,subPlaylist);
//更新播放列表
playlistRouter.post("/update/:id",authVerify,updatePlaylist);
//删除播放列表
playlistRouter.post("/delete/:id",authVerify,deletePlaylist);
module.exports = playlistRouter
