const {Error} = require("../constant/error")
function setResponse(ctx,message,status,data){
  const err = new Error(message|| '服务异常',status,data);
  ctx.app.emit("error",err,ctx)
}
module.exports={
  setResponse
}
