const Router = require("koa-router");
const loginRouter= new Router({prefix:'/login'});
const { login,loginLog } = require('../controller/login.controller');
const { authVerify ,loginVerify} = require("../middleware/login.middleware");
loginRouter.post('/',loginVerify,login);
loginRouter.get("/log/:userId",authVerify,loginLog);
module.exports = loginRouter
