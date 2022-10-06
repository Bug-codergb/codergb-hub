const { setResponse }=require("./setResponse")
const serviceContainer=(ctx,cb)=>{
  try{
    return cb();
  }catch (e) {
    setResponse(ctx,e.message,500);
  }
}
module.exports={
  serviceContainer
}
