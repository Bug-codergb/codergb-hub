const KoaRouter = require("koa-router");
const thumbRouter = new KoaRouter()
const { authVerify }=require("../middleware/login.middleware");
const {
  create,
  cancel,
  createTread,
  cancelTread,
  getVideoThumb,
  getThumbUser
}= require("../controller/thumb.controller");
thumbRouter.post("/thumb",authVerify,create)
thumbRouter.post("/thumb/cancel",authVerify,cancel);
//踩
thumbRouter.post("/tread",authVerify,createTread);
thumbRouter.post("/tread/cancel",authVerify,cancelTread);

thumbRouter.get("/thumb/video/:id",authVerify,getVideoThumb);
thumbRouter.get("/thumb/user/:id",authVerify,getThumbUser)
module.exports = thumbRouter;
