const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class HistoryService{
  async createHistoryService(ctx,videoId,userId){
    try{
      const id = new Date().getTime();
      const sql=`insert into history(id,vId,userId,count) values(?,?,?,?)`;
      const result = await connection.execute(sql,[id,videoId,userId,0]);
      return result[0];
    }catch (e) {
      setResponse(ctx,'error',200,{});
    }
  }
  async judgeUserHistoryService(ctx,userId,vId){
    try{
      const sql=`select * from history where userId = ? and vId=?`;
      const result = await connection.execute(sql,[userId,vId]);
      return result[0];
    }catch (e){
      setResponse(ctx,e.message,500,{});
    }
  }
  async updateHistoryService(ctx,count,userId,vId){
    try{
      const sql=`update history set count =? where userId=? and vId=?`;
      const result = await connection.execute(sql,[count,userId,vId]);
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async userHistoryServiceCount(ctx,keyword,userId){
    try{
      const sql=`
      select  count(DISTINCT(v.id)) as count
      from history
      INNER JOIN video as v ON v.id = history.vId
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      where history.userId=? and vf.mark="cover" ${keyword!==''? `and v.name like '%${keyword}%'` : ''}
      ORDER BY v.createTime desc`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async userHistoryService(ctx,userId,keyword,offset,limit){
    try{
      const sql=`
      select  DISTINCT(v.id),v.name,v.description,v.createTime,v.dt,v.updateTime,history.createTime as history,JSON_OBJECT(
         'id',c.id,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) as category,f.picUrl,JSON_ARRAYAGG(JSON_OBJECT(
			   'id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime
			 )) as tag,(select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
									from user as u where u.userId=v.userId) as user
      from history
      INNER JOIN video as v ON v.id = history.vId
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      where history.userId=? and vf.mark="cover" ${keyword!==''? `and v.name like '%${keyword}%'` : ''}
      GROUP BY v.id
      ORDER BY history.createTime desc
      limit ?,?`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new HistoryService().userHistoryServiceCount(ctx,keyword,userId);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //清除所有历史记录
  async deleteAllService(ctx,userId){
    try{
      const sql=`delete from history where userId = ?`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,"error",500,{});
    }
  }
  async updateUserHistoryService(ctx,id,history){
    try{
      const sql=`update user set history=? where userId=?`;
      const result = await connection.execute(sql,[history,id]);
      return result[0]
    }catch (e) {
      setResponse(ctx,"error",500,{});
    }
  }
}
module.exports = new HistoryService();
