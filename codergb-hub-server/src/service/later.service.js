const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class LaterService{
  async createService(ctx,vId,userId){
    try{
      const id = new Date().getTime();
      const sql=`insert into later (id,vId,userId) values(?,?,?)`;
      const result = await connection.execute(sql,[id,vId,userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAlreadyLaterService(ctx,userId,vId){
    try{
      const sql=`select * from later where userId=? and vId=?`;
      const result = await connection.execute(sql,[userId,vId]);
      return result[0];
    }catch (e){
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteLaterService(ctx,userId,vId){
    try{
      const sql=`delete from later where userId=? and vId=?`;
      const result = await connection.execute(sql,[userId,vId]);
      return result[0];
    }catch (e){
      setResponse(ctx,e.message,500,{});
    }
  }
  async userLaterCountService(ctx,userId){
    try{
      const sql=`
      select count(l.id) as count
      from later as l
      LEFT JOIN user as u on u.userId=l.userId
      LEFT JOIN video as v on v.id = l.vId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      where l.userId=? and vf.mark="cover"`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async userLaterService(ctx,userId,offset,limit){
    try{
      const sql=`
      select l.id,l.createTime,l.updateTime,
       JSON_OBJECT('userId',l.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user,
			 JSON_OBJECT('id',v.id,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',v.description,
			              'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',f.picUrl,'user',
       (select JSON_OBJECT(
			  'userId',v.userId,
				'userName',u.userName,
				'avatarUrl',u.avatarUrl
			 ) from user as u WHERE u.userId = v.userId),
			 'category',(select JSON_OBJECT(
			  'id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) from category as c where c.id = v.cateId),
			 'tag',(select JSON_ARRAYAGG(
			   JSON_OBJECT('id',t.id,'name',t.name,'createTime',t.createTime,'updateTime',t.updateTime)
			 ) FROM tag as t LEFT JOIN tag_video as tv on tv.tId = t.id where tv.vId = v.id)) as video
       from later as l
       LEFT JOIN user as u on u.userId=l.userId
       LEFT JOIN video as v on v.id = l.vId
       LEFT JOIN video_file as vf on vf.videoId = v.id
       LEFT JOIN file as f on f.id = vf.fileId
       where l.userId=? and vf.mark="cover"
       order by l.createTime desc
       limit ?,?;`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new LaterService().userLaterCountService(ctx,userId);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {

    }
  }
}

module.exports = new LaterService();
