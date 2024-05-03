const KoaRouter = require("koa-router");
const roleRouter = new KoaRouter({prefix:'/role'});
const { authVerify } = require("../middleware/login.middleware")
const {
  create,
  createUserRole,
  getAllRole
} = require("../controller/role.controller")
roleRouter.post("/",authVerify,create);
roleRouter.post("/user",authVerify,createUserRole);
roleRouter.get("/all",authVerify,getAllRole);
module.exports = roleRouter;
