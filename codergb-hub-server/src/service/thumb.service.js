const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");

class ThumbService{
  async createService(ctx,alias,id,userId){
    try{
      const uniqueId = new Date().getTime();
      const sql=`insert into thumb (id,userId,${alias}) values(?,?,?)`;
      const result = await connection.execute(sql,[uniqueId,userId,id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //判断是否已经点赞
  async getThumbService(ctx,alias,id,userId){
    try{
      const sql=`select * from thumb where userId=? and ${alias}=?`;
      const result = await connection.execute(sql,[userId,id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async cancelService(ctx,alias,id,userId){
    try{
      const sql=`delete from thumb where userId=? and ${alias}=?`;
      const result = await connection.execute(sql,[userId,id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new ThumbService();
