const KoaRouter = require("koa-router");
const cateRouter = new KoaRouter({prefix:"/cate"});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  getAllCate,
} = require("../controller/category.controller");
cateRouter.post("/",authVerify,create);
cateRouter.get("/all",authVerify,getAllCate)

module.exports = cateRouter;
