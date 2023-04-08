const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class NotifyService{
  async createService(ctx,content,userId,operation){
    try{
      const id = new Date().getTime();
      const sql=`
      insert into notify(id,content,userId,operation) values(?,?,?,?)`;
      const result = await connection.execute(sql,[id,content,userId,operation]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new NotifyService();
