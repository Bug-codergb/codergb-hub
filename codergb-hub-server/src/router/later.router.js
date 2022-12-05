const KoaRouter = require("koa-router");
const laterRouter = new KoaRouter({prefix:"/later"});
const {
  authVerify
}=require("../middleware/login.middleware");
const {
  create,
  cancel
}=require("../controller/later.controller")
laterRouter.post("/:id",authVerify,create);
laterRouter.post("/delete/:id",authVerify,cancel);
module.exports = laterRouter;
