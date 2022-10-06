const KoaRouter = require("koa-router");
const registerRouter = new KoaRouter({prefix:"/register"});
const {registerVerify}=require("../middleware/login.middleware");
const { register } = require("../controller/register.controller");
registerRouter.post("/",registerVerify,register)
module.exports = registerRouter;