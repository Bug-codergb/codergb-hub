const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
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
  //上传频道头像
  async uploadAvatarService(ctx,id,picUrl,originalname,mimetype,dest,filename,size){
    try{
      const sql=`insert into file(id,picUrl,originalname,mimetype,dest,filename,size)
                 values(?,?,?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,picUrl,originalname,mimetype,dest,filename,size]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }

}

module.exports = new ChannelService()
