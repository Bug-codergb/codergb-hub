const {setResponse} = require("../utils/setResponse")
const {registerService,addChannelService} = require("../service/register.service")
class RegisterController{
  async register(ctx,next){
    try{
      const {userName,password}=ctx.request.body;
      const result = await registerService(ctx,userName,password);
      if(result){
        await addChannelService(ctx,result.userId,userName);
        setResponse(ctx,"用户注册成功",200);
      }
    }catch (e) {
      setResponse(ctx,e.message || '服务异常',500);
    }
  }
}
module.exports= new RegisterController();
