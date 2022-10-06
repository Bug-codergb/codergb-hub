const connection = require("../app/databse");
const {setResponse}=require("../utils/setResponse")
class LoginService{
   //获取用户名和密码
  async getUserByUserIdService(ctx,userName,password){
    try{
      const sql=`select userId,userName,password from user where userName=? and password=?`;
      const result =await connection.execute(sql,[userName,password]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  async getUserMsgService(ctx,userId){
    try{
      const sql=`select * from user where userId=?`;
      const result  = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
}
module.exports = new LoginService();