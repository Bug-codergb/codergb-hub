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
    console.log(operation,aliasId);
    try{
      const sql=`delete from notify where operation=? and ${other}= ? and type like '${type}%'`;
      const result = await connection.execute(sql,[operation,aliasId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new NotifyService();
