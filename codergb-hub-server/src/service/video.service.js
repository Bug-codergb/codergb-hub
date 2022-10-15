const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class VideoService{
  async uploadVideoService(ctx,id,dest,filename,originalname,vioUrl){
    try{
      const sql = `insert into file (id,vioUrl,dest,originalname,filename) values(?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,vioUrl,dest,originalname,filename]);
      return result[0];
    }catch (e) {
      ctx.setResponse(ctx,e.message,500,{})
    }
  }
}
module.exports  = new VideoService();
