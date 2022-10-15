const KoaRouter = require("koa-router");
const playlistRouter = new KoaRouter({prefix:"/playlist"});
const { authVerify } = require("../middleware/login.middleware");
const { create,getAllPlaylist } = require("../controller/playlist.controller");
//创建播放列表
playlistRouter.post("/",authVerify,create);
//获取所有播放列表
playlistRouter.get("/all",authVerify,getAllPlaylist);
module.exports = playlistRouter
