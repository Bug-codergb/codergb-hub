const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse")
const {Error} = require("../constant/error")
class RegisterService{
  async registerService(ctx,userName,password) {
    try{
      const userId = new Date().getTime();
      const sql=`insert into user(userId,userName,password) values(?,?,?)`;
      const result = await connection.execute(sql,[userId,userName,password]);
      return {
        ...result[0],
        userId
      };
    }catch (e) {
      setResponse(ctx,e.message,500)
    }
  }
  async addChannelService(ctx,userId){
    try{
      const id = new Date().getTime();
      const sql =`insert into channel(id,name,userId) values(?,?,?)`;
      const result = await connection.execute(sql,[id,"",userId]);
      return result[0];
    }catch (e) {

    }
  }
}
module.exports = new RegisterService();
