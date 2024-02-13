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
  async allNotifyService(ctx,id,offset,limit,isRead){
    console.log(isRead,"-----------------")
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
      where if( n.type!='upload',(v.userId = ? or c.userId=? or n.userId=?) ${isRead!==undefined?` and isRead = ?`:''},
                n.userId = ?${isRead!==undefined?` and isRead = ?` : ''})
      limit ?,?`;
      let execArr=[id,id,id,id,offset,limit];
      if(isRead!==undefined){
        execArr=[id,id,id,isRead,id,isRead,offset,limit]
      }

      const result = await connection.execute(sql,execArr);

      const countSQL=`
      select count(n.id) as count
      from notify as n
      left join video as v on v.id = n.aliaId
      left join comment as c on c.id = n.aliaId
      where if( n.type!='upload',(v.userId = ? or c.userId=? or n.userId=?)${isRead!==undefined?` and isRead = ?`:''} ,
                n.userId = ? ${isRead!==undefined?` and isRead = ?` : ''})`;

      let countExecArr=[id,id,id,id];
      if(isRead!==undefined){
        countExecArr=[id,id,id,isRead,id,isRead]
      }
      const count = await connection.execute(countSQL,countExecArr);
      return {
        list:result[0],
        count:count[0][0].count
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAllNotifyService(ctx,offset,limit){
    try{
      const sql=`
      select n.id,n.content,if(
       n.userId,
       (select JSON_OBJECT('userId',n.userId,'userName',u1.userName,'avatarUrl',u1.avatarUrl) from user as u1 where u1.userId = n.userId),
      if(v.userId,
          (select JSON_OBJECT('userId',v.userId,'userName',u2.userName,'avatarUrl',u2.avatarUrl) FROM user as u2 where u2.userId = v.userId),
          if(c.userId,
              (select JSON_OBJECT('userId',c.userId,'userName',u3.userName,'avatarUrl',u3.avatarUrl) from user as u3 where u3.userId = c.userId ),
              (select JSON_OBJECT('userId',c.userId,'userName',u4.userName,'avatarUrl',u4.avatarUrl) FROM user as u4 where u4.userId = m.userId)
            )
          )) as user,
       (select JSON_OBJECT(
        'userId',n.operation,'userName',u.userName,'avatarUrl',u.avatarUrl
       ) from user as u where u.userId = n.operation) as operation,
       n.isRead,n.createTime,
       n.updateTime,n.type,n.aliaId,
       if(v.id,JSON_OBJECT('id',v.id,'name',v.name,'dt',v.dt,'playCount',v.playCount),null) as video,
       if(c.id,JSON_OBJECT('id',c.id,'content',c.content),null ) as comment,
       if(m.id,JSON_OBJECT('id',m.id,'title',m.title),null) as moment
      from notify as n
      left join video as v on v.id = n.aliaId
      left join comment as c on c.id = n.aliaId
      left join moment as m on m.id = n.aliaId
      limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);

      const countSQL=`
      select count(n.id) as count
      from notify as n
      left join video as v on v.id = n.aliaId
      left join comment as c on c.id = n.aliaId`;
      const count = await connection.execute(countSQL);
      console.log(count[0][0])
      return {
        list:result[0],
        count:count[0][0].count
      }
    }catch (e) {

    }
  }
  async updateNotifyStatusService(ctx,id){
    try{
      console.log(id)
      const sql=`update notify set isRead = 1 where id in (?)`;
      const result = await connection.execute(sql,[id]);
      return result;
    }catch (e) {

    }
  }
}

module.exports = new NotifyService();
