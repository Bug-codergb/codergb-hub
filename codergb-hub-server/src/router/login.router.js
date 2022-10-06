const Router = require("koa-router");
const loginRouter= new Router({prefix:'/login'});
const { login } = require('../controller/login.controller');
const { authVerify ,loginVerify} = require("../middleware/login.middleware");
loginRouter.post('/',loginVerify,login);
module.exports = loginRouter