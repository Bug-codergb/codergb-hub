const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class ChannelService{
  async createChannelService(ctx,name,banner,trailer,description,official){
    try{
      const id = new Date().getTime();
      const sql=`insert into channel(id,name,banner,trailer,description,official) values(?,?,?,?,?,?)`;
      const result =await connection.execute(sql,[id,name,banner,trailer,description,official]);
      return result[0]
    }catch (e) {
      console.log(e)
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
