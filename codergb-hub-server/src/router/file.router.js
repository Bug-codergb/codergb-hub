const KoaRouter = require("koa-router");
const fileRouter = new KoaRouter();
const {
  authVerify
} = require("../middleware/login.middleware");
const { imageUpload } = require("../middleware/file.middleware");
const {
  getImagePrev,
  upload
} = require("../controller/file.controller");
fileRouter.get("/image/:id",getImagePrev);
fileRouter.post("/image/upload",imageUpload,upload)
module.exports = fileRouter;
