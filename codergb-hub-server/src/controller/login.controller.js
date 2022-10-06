const jwt = require("jsonwebtoken");
const { PRIVATE_KEY }=require("../app/config");
const { getUserMsgService }=require("../service/login.service")
const {setResponse} = require("../utils/setResponse")
class LoginController{
  async login(ctx,next) {
    const {userId, userName, avatarUrl, auth} = ctx.user;
    const token = jwt.sign({userName, userId}, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
      algorithm: 'RS256'
    })
    const result = await getUserMsgService(ctx, userId);
    setResponse(ctx, "登录成功", 200, {
      userId,
      userName,
      token,
      avatarUrl: result[0].avatarUrl
    })
  }
}
module.exports = new LoginController();
