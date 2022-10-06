const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse")
class ChannelService{
  async createChannelService(ctx,name,alias,description,official){
    try{
      const id = new Date().getTime();
      const sql=`insert into channel(id,name,alias,description,official) values(?,?,?,?,?)`;
      const result =await connection.execute(sql,[id,name,alias,description,official]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getChannelMsgService(id){
    try{
      const sql=`select * from channel where id=?`;
      const result =await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {

    }
  }
}

module.exports = new ChannelService()
