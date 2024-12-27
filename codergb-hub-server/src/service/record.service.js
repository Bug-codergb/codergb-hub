const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class RecordService{
  async createService(ctx,vId,userId,count,time){
    try{
      const sql=`insert into video_record(vId,userId,count,createTime) values(?,?,?,?)`;
      const result = await connection.execute(sql,[vId,userId,count,time]);
      return result[0]
    }catch (e) {
      console.log(e);
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
      setResponse(ctx,e.message,500,{})
    }
  }
  async getUserVideoRecordService(ctx,userId){
    try{
      const sql=`
              select sum(vr.count) as count,vr.createTime
        from video_record as vr
        left join video v on v.id = vr.vId
        where v.userId = ? and DATE_SUB(CURDATE(),INTERVAL 30 day) <= vr.createTime
        group by vr.createTime
        order by vr.createTime`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getUserVideoThumbService(ctx,userId){
    try{
      const sql=`
                select count(v.id) as count,t.createTime
                from thumb as t
                inner join video v on v.id = t.vId
                where v.userId = ? and
                      t.tread=0 and t.vId is not null and
                      DATE_SUB(CURDATE(),INTERVAL 30 day) <= DATE(t.createTime)
                group by DATE(t.createTime)`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {

    }
  }
  async getUserSubService(ctx,id){
    try{
      const sql=`
      select count(s.id) as count,DATE(s.createTime) AS time
      from subscriber as s
      where s.upId=? and DATE_SUB(CURDATE(),INTERVAL 30 DAY)<=DATE(s.createTime)
      group by time`;
      const result = await connection.execute(sql,[id]);
      return result[0]
    }catch (e) {

    }
  }
}
module.exports=new RecordService();
