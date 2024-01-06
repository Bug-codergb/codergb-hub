const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class DmService{
  async createService(ctx,vId,text,time,userId){
    try{
      const id = new Date().getTime();
      const sql=`insert into dm(id,text,time,vId,userId) values(?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,text,time,vId,userId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async videoDmService(ctx,vId,offset,limit){
    try{
      const sql=`select id,text,time,dm.createTime,dm.updateTime,
       JSON_OBJECT('userId',dm.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user
      from dm
      LEFT JOIN user as u on u.userId= dm.userId
      where vId=?
      limit ?,?`;
      const countSQL = `select count(id) as count from dm where vId=?`
      const result = await connection.execute(sql,[vId,offset,limit]);
      const count = await connection.execute(countSQL,[vId]);
      return {
        list:result[0],
        count:count[0][0].count
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allDmService(ctx,offset,limit,keyword){
    try{
      const sql=`
            select d.id,d.text,d.time,
             JSON_OBJECT('id',d.vId,'name',v.name) as video,
             JSON_OBJECT('userId',d.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user,
             d.createTime,d.updateTime
      from dm as d
      left join video v on d.vId = v.id 
      left join user u on d.userId = u.userId
      ${keyword.trim().length!==0?`where d.text like '%${keyword}%'`:''}
      order by v.id,d.createTime desc 
      limit ?,?`;
      const countSQL=`
              select COUNT(d.id) as count
        from dm as d
        left join video v on d.vId = v.id
        left join user u on d.userId = u.userId
        ${keyword.trim().length!==0?`where d.text like '%${keyword}%'`:''}
        order by v.id,d.createTime asc`;

      const res = await connection.execute(sql,[offset,limit]);
      const count = await connection.execute(countSQL);
      return {
        list:res[0],
        count:count[0][0].count
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteDmService(ctx,id){
    try{
      const sql=`delete from dm where id=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new DmService();
