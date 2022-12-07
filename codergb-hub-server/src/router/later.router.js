const KoaRouter = require("koa-router");
const laterRouter = new KoaRouter({prefix:"/later"});
const {
  authVerify
}=require("../middleware/login.middleware");
const {
  create,
  cancel,
  userLater
}=require("../controller/later.controller")
laterRouter.post("/:id",authVerify,create);
laterRouter.post("/delete/:id",authVerify,cancel);
//获取用户稍后观看
laterRouter.get("/user/:id",authVerify,userLater)
module.exports = laterRouter;
