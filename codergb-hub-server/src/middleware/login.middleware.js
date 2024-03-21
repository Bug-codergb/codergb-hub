const jwt = require('jsonwebtoken');
const {PUBLIC_KEY}=require('../app/config')
const {setResponse} = require("../utils/setResponse");
const { Error }=require("../constant/error")
const { getUserByUserIdService } = require("../service/login.service")
async function authVerify(ctx,next){
  const authorization = ctx.headers.authorization;
  if(!authorization){
    const err = new Error("请登录",401);
    return ctx.app.emit('error',err,ctx);
  }else{
    try{
      const token = authorization.replace('Bearer ','');
      const result = await jwt.verify(token,PUBLIC_KEY,{
        algorithms:['RS256']
      })
      ctx.user = result;
      await next();
    }catch (e) {
      console.log(e)
      setResponse(ctx,"请登录",401);
    }
  }
}

async function loginVerify(ctx,next){
  const {userName,password} = ctx.request.body;
  console.log(userName,password)
  try{
    if(!userName || !password || userName.trim().length===0 || password.toString().trim().length===0){
      const err = new Error("用户名或者密码不能为空",401);
      return ctx.app.emit("error",err,ctx);
    }else{
      const user = await getUserByUserIdService(ctx,userName,password);
      if(user.length === 0){
        setResponse(ctx,"用户名或者密码错误",401);
      }else{
        const { userId,userName } = user[0]
        ctx.user={
          userId:userId,
          userName:userName,
        }
        await next();
      }
    }
  }catch (e) {
    console.log(e)
  }
}
async function registerVerify(ctx,next){
  const {userName,password} = ctx.request.body;
  if(!userName || !password || userName.trim().length===0 || password.trim().length===0){
    const err = new Error("用户名或者密码不能为空",401);
    return ctx.app.emit("error",err,ctx);
  }else{
    await next();
  }
}
module.exports={
  authVerify,
  loginVerify,
  registerVerify
}
