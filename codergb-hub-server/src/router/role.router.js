const KoaRouter = require("koa-router");
const roleRouter = new KoaRouter({prefix:'/role'});
const { authVerify } = require("../middleware/login.middleware")
const {
  create,
  createUserRole,
  getAllRole,
  setUserRole,
  deleteRole
} = require("../controller/role.controller")
roleRouter.post("/",authVerify,create);
roleRouter.post("/user",authVerify,createUserRole);
roleRouter.get("/all",authVerify,getAllRole);
roleRouter.post("/user/set",authVerify,setUserRole);
roleRouter.post("/delete/:id",authVerify,deleteRole);
module.exports = roleRouter;
