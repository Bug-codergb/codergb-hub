const { app } =require("./app/index");
const database = require("./app/databse");
const {
  APP_PORT
}=require('./app/config');

app.listen(APP_PORT,()=>{
  console.log("服务启动成功")
})