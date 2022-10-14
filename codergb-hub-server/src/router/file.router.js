const KoaRouter = require("koa-router");
const fileRouter = new KoaRouter();
const {
  getImagePrev
} = require("../controller/file.controller");
fileRouter.get("/image/:id",getImagePrev);
module.exports = fileRouter;
