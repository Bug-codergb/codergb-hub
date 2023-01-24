const { setResponse } = require("../utils/setResponse");
const connection = require("../app/databse");
class CollectionService{
  async createService(ctx,name,cover,userId){
    try{
      const id = new Date().getTime();
      const sql=`insert into collection (id,name,cover,userId) values(?,?,?,?)`;
      const result = await connection.execute(sql,[id,name,cover,userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async addVideoService(ctx,vId,cId,sort){
    try{
      const sql='insert into collection_video(cId,vId,sort) values(?,?,?)';
      const result = await connection.execute(sql,[cId,vId,sort]);
      return result[0]
    }catch (e) {
      console.log(e)
      setResponse(ctx,e.message,500,{});
    }
  }
  async allCollectionCountService(ctx,keyword){
    try{
      const sql=`
      select count(c.id) as count
      from collection as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN file as f on f.id = c.cover
      ${keyword.length!==0 ? `where c.name like '%${keyword}%'`:''}`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {

    }
  }
  async allCollectionService(ctx,offset,limit,keyword){
    try{
      const sql=`
      select c.id,c.name,c.createTime,c.updateTime,f.picUrl,
			 JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user
      from collection as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN file as f on f.id = c.cover
      ${keyword.length!==0 ? `where c.name like '%${keyword}%'`:''}
      LIMIT ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new CollectionService().allCollectionCountService(ctx,keyword);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {

    }
  }
}

module.exports = new CollectionService();
