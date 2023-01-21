const KoaRouter = require("koa-router");
const collectionRouter = new KoaRouter({prefix:'/collection'});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  addVideo
} = require("../controller/collection.controller");
collectionRouter.post("/",authVerify,create);
collectionRouter.post("/video",authVerify,addVideo);//将视频添加至集合
module.exports = collectionRouter;
