const Router = require("koa-router");
const chatRouter = new Router();
const {
  create,
  getChatQueue,
  getChatContent
}=require("../controller/chat.controller")
chatRouter.all("/chat",create)
chatRouter.all("/chat/queue",getChatQueue);
chatRouter.all("/chat/content",getChatContent);
module.exports = chatRouter;
