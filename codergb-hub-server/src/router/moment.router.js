const KoaRouter = require('koa-router');
const momentRouter = new KoaRouter({prefix:"/moment"});
const { authVerify } = require("../middleware/login.middleware");
const {
  create
}=require("../controller/moment.controller")
momentRouter.post("",authVerify,create);
module.exports = momentRouter;
