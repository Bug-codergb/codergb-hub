const Koa = require('koa');
const koaBodyparser = require('koa-bodyparser');
const errorHandle=require('./errorHandle');

const app = new Koa();
app.use(koaBodyparser());
app.use(async(ctx,next)=>{
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set('Access-Control-Allow-Headers','POST,Origin,Content-Type,Accept,authorization')
  await next()
})
const useRoutes = require("../router/index");
useRoutes(app);

app.on("error",errorHandle);
module.exports={
  app
}
