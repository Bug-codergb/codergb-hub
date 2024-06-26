const { setResponse } = require("../utils/setResponse");
const connection = require("../app/databse");
class CollectionService{
  async createService(ctx,name,cover,userId,description){
    try{
      const id = new Date().getTime();
      const sql=`insert into collection (id,name,cover,userId,description) values(?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,name,cover,userId,description]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async updateColService(ctx,id,name,cover,userId,description){
    try{
      const sql=`update collection set name =?,cover=?,userId=?,description=? where id=?`;
      const result = await connection.execute(sql,[name,cover,userId,description,id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async addVideoService(ctx,vId,cId){
    try{
      const delSQL=`delete from collection_video where cId=?`;
      await connection.execute(delSQL,[cId]);
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
      select c.id,c.name,c.createTime,c.updateTime,f.picUrl,c.description,c.cover as imgId,
			 JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user,
			 (select count(cv.vId)
       from collection_video as cv 
       left join video as v on v.id=cv.vId where v.id is not null and cv.cId = c.id) as count
      from collection as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN file as f on f.id = c.cover
      ${keyword.length!==0 ? `where c.name like '%${keyword}%'`:''}
      order by c.createTime desc
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
      select c.id,c.name,c.createTime,c.updateTime,f.picUrl,c.description,
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
  async getUserColCountService(ctx,id,offset,limit){
    try{
      const sql=`select count(c.id) as count
      from collection as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN file as f on f.id = c.cover
      where c.userId=?`;
      const result = await connection.execute(sql,[id]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getUserColService(ctx,id,offset,limit){
    try{
      const sql=`select c.id,c.name,c.createTime,c.updateTime,c.description,f.picUrl,
			 JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user
       from collection as c
       LEFT JOIN user as u on u.userId = c.userId
       LEFT JOIN file as f on f.id = c.cover
       where c.userId=?
       LIMIT ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const count = await new CollectionService().getUserColCountService(ctx,id);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteColService(ctx,id){
    try{
      const sql=`delete from collection where id=?`;
      const result = await connection.execute(sql,[id]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new CollectionService();
