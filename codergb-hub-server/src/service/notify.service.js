const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class NotifyService{
  async createService(ctx,content,userId,operation,type,aliasId){
    try{
      const id = new Date().getTime();
      const sql=`
      insert into notify(id,content,userId,operation,type,aliaId) values(?,?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,content,userId,operation,type,aliasId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteNotifyByMsg(ctx,operation,aliasId,type,other="aliaId"){
    try{
      const sql=`delete from notify where operation=? and ${other}= ? and type like '${type}%'`;
      const result = await connection.execute(sql,[operation,aliasId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allNotifyService(ctx,id,offset,limit){
    try{
      const sql=`
      select n.id,n.content,if(n.userId,n.userId,if(v.userId,v.userId,c.userId)) as userId,
       (select JSON_OBJECT(
        'userId',n.operation,'userName',u.userName,'avatarUrl',u.avatarUrl
       ) from user as u where u.userId = n.operation) as operation,
       n.isRead,n.createTime,
       n.updateTime,n.type,n.aliaId,
       if(v.id,JSON_OBJECT('id',v.id,'name',v.name,'dt',v.dt,'playCount',v.playCount),null) as video,
       if(c.id,JSON_OBJECT('id',c.id,'content',c.content),null ) as comment
      from notify as n
      left join video as v on v.id = n.aliaId
      left join comment as c on c.id = n.aliaId
      where n.userId=? or v.userId = ? or c.userId=?
      limit ?,?`;
      const result = await connection.execute(sql,[id,id,id,offset,limit]);

      const countSQL=`
      select count(n.id) as count
      from notify as n
      left join video as v on v.id = n.aliaId
      left join comment as c on c.id = n.aliaId
      where n.userId=? or v.userId = ? or c.userId=?`;
      const count = await connection.execute(countSQL,[id,id,id]);
      return {
        list:result[0],
        count:count[0][0].count
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new NotifyService();
