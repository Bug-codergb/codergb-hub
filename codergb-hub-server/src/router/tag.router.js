const KoaRouter = require("koa-router");
const tagRouter = new KoaRouter({prefix:"/tag"});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  getAllTag
} = require("../controller/tag.controller");
tagRouter.post("/",authVerify,create);
tagRouter.get("/all",authVerify,getAllTag);
module.exports = tagRouter;
