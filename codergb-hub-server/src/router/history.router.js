const KoaRouter = require("koa-router");
const historyRouter = new KoaRouter({prefix:"/history"});
const { authVerify } = require("../middleware/login.middleware")
const {
  createHistory,
  userHistory,
  deleteAll,
  updateHistory
} = require("../controller/history.controller");
//添加历史记录
historyRouter.post("/:id",authVerify,createHistory);
//清除所有历史记录
historyRouter.post("/delete/all",authVerify,deleteAll);
//获取用户历史记录
historyRouter.post("/user/:userId",authVerify,userHistory);
//更新历史记录
historyRouter.post("/update/:id",authVerify,updateHistory)
module.exports = historyRouter;
