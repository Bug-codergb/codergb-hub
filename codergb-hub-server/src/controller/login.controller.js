const jwt = require("jsonwebtoken");
const moment = require("moment");
const { PRIVATE_KEY }=require("../app/config");
const {
  getUserMsgService ,
  insertLoginLog,
  loginLogService
}=require("../service/login.service")
const {setResponse} = require("../utils/setResponse")
class LoginController{
  async login(ctx,next) {
    const {userId, userName, avatarUrl, auth} = ctx.user;
    const token = jwt.sign({userName, userId}, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
      algorithm: 'RS256'
    })
    const result = await getUserMsgService(ctx, userId);
    await insertLoginLog(ctx,userId);
    setResponse(ctx, "登录成功", 200, {
      userId,
      userName,
      token,
      avatarUrl: result[0].avatarUrl,
      history:result[0].history,
      isExplore:result[0].isExplore
    })
  }
  async loginLog(ctx,next){
    try{
      const {userId} = ctx.params;
      const result = await loginLogService(ctx,userId);
      if(result.length!==0){
        for(let item of result){
          item.date = moment(item.date).format("yyyy-MM-DD")
        }
      }
      setResponse(ctx,"success",200,result);
    }catch (e) {

    }
  }
}
module.exports = new LoginController();
