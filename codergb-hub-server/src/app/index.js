const Koa = require('koa');
const KoaWebsocket = require('koa-websocket');
const KoaStatic = require("koa-static");
const koaBodyparser = require('koa-bodyparser');
const path = require("path");
const fs = require("fs");
const errorHandle=require('./errorHandle');

const app = new Koa();
const webApp = KoaWebsocket(app);
app.use(koaBodyparser());
app.use(async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Headers','POST,Origin,Content-Type,Accept,authorization')
  await next()
})
app.use(KoaStatic(path.resolve(__dirname,"../../","./upload/")))
const useRoutes = require("../router/index");
useRoutes(app);
const videoRouter = require("../socket/video.router");
webApp.ws.use(videoRouter.routes());
const chatRouter=require("../socket/chat.router");
webApp.ws.use(chatRouter.routes());
app.on("error",errorHandle);
module.exports={
  app,
  webApp
}
