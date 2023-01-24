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
  async addVideoService(ctx,vId,cId){
    try{
      let values=[];
      for(let item of vId){
        values.push(`(?,?,?)`);
      }
      let sqlValues = values.join(",");
      const sql=`insert into collection_video(cId,vId,sort) values${sqlValues}`;
      let execArr=[];
      for(let item of vId){
        execArr = execArr.concat(cId,item.id,item.sort);
      }
      const result = await connection.execute(sql,execArr);
      return result[0]
    }catch (e) {
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
  async getColDetailService(ctx,id){
    try{
      const sql=`
      select c.id,c.name,c.createTime,c.updateTime,f.picUrl,
			 JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user
       from collection as c
       LEFT JOIN user as u on u.userId = c.userId
       LEFT JOIN file as f on f.id = c.cover
       where c.id = ?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async delColVideoService(ctx,cId,vId){
    try{
      const sql=`delete from collection_video where cId=? and vId=?`;
      const result = await connection.execute(sql,[cId,vId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new CollectionService();
