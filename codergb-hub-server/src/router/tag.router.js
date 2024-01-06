const KoaRouter = require("koa-router");
const tagRouter = new KoaRouter({prefix:"/tag"});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  update,
  getAllTag,
  deleteTag,
  getTagVideo
} = require("../controller/tag.controller");
tagRouter.post("/",authVerify,create);
tagRouter.post("/update/:id",authVerify,update);
tagRouter.get("/all",authVerify,getAllTag);
tagRouter.post("/delete/:id",authVerify,deleteTag);
tagRouter.post("/video/:id",authVerify,getTagVideo)
module.exports = tagRouter;
