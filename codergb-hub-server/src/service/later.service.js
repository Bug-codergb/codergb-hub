const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class LaterService{
  async createService(ctx,vId,userId){
    try{
      const id = new Date().getTime();
      const sql=`insert into later (id,vId,userId) values(?,?,?)`;
      const result = await connection.execute(sql,[id,vId,userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAlreadyLaterService(ctx,userId,vId){
    try{
      const sql=`select * from later where userId=? and vId=?`;
      const result = await connection.execute(sql,[userId,vId]);
      return result[0];
    }catch (e){
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteLaterService(ctx,userId,vId){
    try{
      const sql=`delete from later where userId=? and vId=?`;
      const result = await connection.execute(sql,[userId,vId]);
      return result[0];
    }catch (e){
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new LaterService();
