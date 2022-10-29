const KoaRouter = require("koa-router");
const blockRouter = new KoaRouter({prefix:'/block'});
const {
  authVerify
} = require("../middleware/login.middleware");
const {
  create,
  allBlock,
  userAddBlock,
  userDelBlock,
  getUserBlock
} = require("../controller/block.controller")
blockRouter.post("/create",authVerify,create);
blockRouter.get("/all",authVerify,allBlock);
//用户添加板块
blockRouter.post("/user/add",authVerify,userAddBlock);
//用户删除板块
blockRouter.post("/user/delete",authVerify,userDelBlock);
//获取用户板块
blockRouter.get("/user/:userId",authVerify,getUserBlock);
module.exports = blockRouter;
