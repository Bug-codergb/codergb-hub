const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class TagService{
  async createService(ctx,name){
    try{
      const id = new Date().getTime();
      const sql = `insert into tag(id,name) values(?,?)`;
      const result = await connection.execute(sql,[id,name]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getTagCountService(ctx,keyword){
    try{
      const sql = `select count(*) as count from tag ${keyword.length!==0 ? `where name like '%${keyword}%'`:''}`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getAllTagService(ctx,offset,limit,keyword){
    try{
      const sql=`select * from tag ${keyword.length!==0 ? `where name like '%${keyword}%'`:''} limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new TagService().getTagCountService(ctx,keyword);
      return {
        list:result[0],
        count:count[0].count
      }
    }catch (e) {

    }
  }
}

module.exports = new TagService();
