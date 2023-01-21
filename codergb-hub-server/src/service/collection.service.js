const { setResponse } = require("../utils/setResponse");
const connection = require("../app/databse");
class CollectionService{
  async createService(ctx,name,cover){
    try{
      const id = new Date().getTime();
      const sql=`insert into collection (id,name,cover) values(?,?,?)`;
      const result = await connection.execute(sql,[id,name,cover]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async addVideoService(ctx,vId,cId,sort){
    try{
      console.log(vId,cId,sort);
      const sql='insert into collection_video(cId,vId,sort) values(?,?,?)';
      const result = await connection.execute(sql,[cId,vId,sort]);
      return result[0]
    }catch (e) {
      console.log(e)
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new CollectionService();
