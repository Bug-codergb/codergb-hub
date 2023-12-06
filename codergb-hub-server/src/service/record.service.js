const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class RecordService{
  async createService(ctx,vId,userId,count,time){
    try{
      const sql=`insert into video_record(vId,userId,count,createTime) values(?,?,?,?)`;
      const result = await connection.execute(sql,[vId,userId,count,time]);
      return result[0]
    }catch (e) {

      setResponse(ctx,e.message,500,{})
    }
  }
  async updateCountService(ctx,vId,userId,count,createTime){
    try{
      const sql=`update video_record set count =? where userId=? and vId=? and createTime = ?`;
      const result = await connection.execute(sql,[count,userId,vId,createTime]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getVideoService(vId,userId,createTime){
    console.log(vId,userId,createTime);
    try{
      const sql=`select vId,userId ,count,createTime from video_record where userId=? and vId=? and createTime=?`;
      const result = await connection.execute(sql,[userId,vId,createTime]);
      return result[0];
    }catch (e) {

    }
  }
}
module.exports=new RecordService();
