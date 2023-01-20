const KoaRouter = require("koa-router");
const cateRouter = new KoaRouter({prefix:"/cate"});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  getAllCate,
  getExplore
} = require("../controller/category.controller");
cateRouter.post("/",authVerify,create);
cateRouter.get("/all",authVerify,getAllCate)
cateRouter.get("/explore",authVerify,getExplore);
module.exports = cateRouter;
