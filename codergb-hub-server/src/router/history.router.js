const KoaRouter = require("koa-router");
const historyRouter = new KoaRouter({prefix:"/history"});
const { authVerify } = require("../middleware/login.middleware")
const {
  createHistory,
  userHistory
} = require("../controller/history.controller");
//添加历史记录
historyRouter.post("/:id",authVerify,createHistory)
//获取用户历史记录
historyRouter.post("/user/:userId",authVerify,userHistory);
module.exports = historyRouter;
