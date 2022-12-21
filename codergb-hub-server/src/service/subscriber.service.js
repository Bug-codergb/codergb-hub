const connection =require("../app/databse");
const { setResponse } = require("../utils/setResponse");
const {
  getUserFansCountService,
  getUserVideoCountService
} = require("../service/common.service");
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
  async userSubCountService(ctx,userId){
    try{
      const sql=`SELECT count(sub.id) as count
                 from subscriber as sub
                 LEFT JOIN user as u on u.userId = sub.upId
                 LEFT JOIN channel as c on c.userId = sub.upId
                 where sub.userId = ?`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async userSubService(ctx,userId,offset,limit){
    try{
      const sql=`
      select sub.id,JSON_OBJECT('userId',upId,'userName',u.userName,'avatarUrl',u.avatarUrl) as up,sub.createTime,sub.updateTime,
       JSON_OBJECT('id',c.id,'name',c.name,'alias',c.alias,'description',c.description,'official',c.official,
			             'createTime',c.createTime,'updateTime',c.updateTime) as channel
      from subscriber as sub
      LEFT JOIN user as u on u.userId = sub.upId
      LEFT JOIN channel as c on c.userId = sub.upId
      where sub.userId = ?
      LIMIT ?,?`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new SubscriberService().userSubCountService(ctx,userId);
      if(result && result[0].length!==0){
        for(let item of result[0]){
          let fans = await getUserFansCountService(item.up.userId);
          item.fans = fans[0].count;
          let video = await getUserVideoCountService(item.up.userId)
          item.video = video[0].count;
        }
      }
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new SubscriberService();
