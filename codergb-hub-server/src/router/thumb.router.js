const KoaRouter = require("koa-router");
const thumbRouter = new KoaRouter({prefix:"/thumb"})
const { authVerify }=require("../middleware/login.middleware");
const {
  create,
  cancel
}= require("../controller/thumb.controller");
thumbRouter.post("/",authVerify,create)
thumbRouter.post("/cancel",authVerify,cancel);
module.exports = thumbRouter;
