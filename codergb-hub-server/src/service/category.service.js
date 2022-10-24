const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class CategoryService{
  async createService(ctx,name){
    try{
      const id = new Date().getTime();
      const sql=`insert into category(id,name) values(?,?)`;
      const result = await connection.execute(sql,[id,name]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getCateCount(ctx){
    try{
      const sql=`select count(*) as count from category`;
      const result = await connection.execute(sql);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getAllCateService(ctx,offset,limit){
    try{
      const sql=`select * from category limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new CategoryService().getCateCount(ctx);
      return {
        count:count[0].count,
        list:result[0],
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new CategoryService();
