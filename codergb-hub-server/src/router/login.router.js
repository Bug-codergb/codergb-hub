const Router = require("koa-router");
const loginRouter= new Router({prefix:'/login'});
const { login,loginLog,loginMsg,editUser } = require('../controller/login.controller');
const { authVerify ,loginVerify} = require("../middleware/login.middleware");
loginRouter.post('/',loginVerify,login);
loginRouter.get("/log/:userId",authVerify,loginLog);
loginRouter.get("/user-msg/:userId",authVerify,loginMsg);
loginRouter.post("/edit",authVerify,editUser);
module.exports = loginRouter
