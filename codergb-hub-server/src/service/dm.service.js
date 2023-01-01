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
  async videoDmService(ctx,vId){
    try{
      const sql=`select id,text,time,dm.createTime,dm.updateTime,
       JSON_OBJECT('userId',dm.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user
      from dm
      LEFT JOIN user as u on u.userId= dm.userId
      where vId=?`;
      const result = await connection.execute(sql,[vId]);
      return result[0];
    }catch (e) {

    }
  }
}

module.exports = new DmService();
