const KoaRouter = require("koa-router");
const recordRouter = new KoaRouter({prefix:"/record"});
const {
  authVerify
}=require("../middleware/login.middleware");
const {
  create
} = require("../controller/record.controller")
recordRouter.post("/:vId",authVerify,create);
module.exports = recordRouter
