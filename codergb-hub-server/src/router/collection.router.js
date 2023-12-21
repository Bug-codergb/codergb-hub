const KoaRouter = require("koa-router");
const collectionRouter = new KoaRouter({prefix:'/collection'});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  addVideo,
  allCollection,
  getColDetail,
  delColVideo,
  getUserCol,
  deleteCol,
  updateCol
} = require("../controller/collection.controller");
collectionRouter.post("/",authVerify,create);
collectionRouter.post("/update/:id",authVerify,updateCol);
collectionRouter.post("/video",authVerify,addVideo);//将视频添加至集合
collectionRouter.get("/all",authVerify,allCollection);
collectionRouter.post("/detail/:id",authVerify,getColDetail);//获取集合详情
collectionRouter.post("/video/delete/:cId/:vId",authVerify,delColVideo);
collectionRouter.post("/user/:id",authVerify,getUserCol);//获取用户集合
collectionRouter.post("/delete/:id",authVerify,deleteCol);
module.exports = collectionRouter;
