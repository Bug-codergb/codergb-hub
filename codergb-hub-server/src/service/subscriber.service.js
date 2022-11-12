const connection =require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class SubscriberService{
  async createService(ctx,upId,userId){
    try{
      const id = new Date().getTime();
      const sql=`insert into subscriber(id,userId,upId) values(?,?,?)`;
      const result = await connection.execute(sql,[id,userId,upId]);
      return result[0]
    }
    catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //获取是否订阅
  async getSubService(ctx,userId,upId){
    try{
      const sql=`select id from subscriber where userId=? and upId =?`;
      const result = await connection.execute(sql,[userId,upId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async cancelService(ctx,userId,upId){
    try{
      const sql=`delete from subscriber where userId=? and upId =?`;
      const result = await connection.execute(sql,[userId,upId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new SubscriberService();
