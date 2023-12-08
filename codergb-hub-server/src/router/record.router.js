const KoaRouter = require("koa-router");
const recordRouter = new KoaRouter({prefix:"/record"});
const {
  authVerify
}=require("../middleware/login.middleware");
const {
  create,
  getUserVideoRecord,
  getUserVideoThumb
} = require("../controller/record.controller")
recordRouter.post("/:vId",authVerify,create);
recordRouter.get("/user/:id",authVerify,getUserVideoRecord);
recordRouter.get("/thumb/:id",authVerify,getUserVideoThumb);
module.exports = recordRouter
