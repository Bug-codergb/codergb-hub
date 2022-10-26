const { app,webApp } =require("./app/index");
const database = require("./app/databse");
const {
  APP_PORT,
  SOCKET_APP_PORT
}=require('./app/config');

app.listen(APP_PORT,()=>{
  console.log("服务启动成功")
})
webApp.listen(SOCKET_APP_PORT,()=>{
  console.log("socket服务创建成功");
})
