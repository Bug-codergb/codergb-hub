const Router = require("koa-router");
const chatRouter = new Router();
const {
  create
}=require("../controller/chat.controller")
chatRouter.all("/chat",create)
module.exports = chatRouter;
