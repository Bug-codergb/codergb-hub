const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse")
const { serviceContainer } = require("../utils/serviceContainer")
class UserService{
  async uploadAvatarService(ctx,userId,avatarUrl,mimetype,destination,filename, size,originalname){
    try{
      const sql=`update user set avatarUrl=?,mimetype=?,dest=?,filename=?,size=?,originalname=? where userId=?`;
      const result =await connection.execute(sql,[avatarUrl,mimetype,destination,filename,size,originalname,userId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  async getUserMsgService(ctx,userId){
    return serviceContainer(ctx,async function(){
      const sql=`select * from user where userId=?`;
      const result = await connection.execute(sql,[userId]);
      return result[0]
    })
  }
  async userMsgService(ctx,userId){
    try{
      const sql=`
      select u.userId,u.userName,u.avatarUrl,u.createTime,u.updateTime,
       JSON_ARRAYAGG(JSON_OBJECT(
			   'userId',sub.upId,
				 'userName',(select usr.userName from user as usr where usr.userId = sub.upId),
				 'avatarUrl',(select usr.avatarUrl from user as usr where usr.userId = sub.upId)
			 )) AS subscriber,
			 JSON_OBJECT(
			  'video',(
				  select JSON_ARRAYAGG(
					  JSON_OBJECT('id',t.vId)
					) FROM thumb as t where t.userId = u.userId and t.vId is not null and tread=0
				),
				'comment',(
				select JSON_ARRAYAGG(
					  JSON_OBJECT('id',t.commentId)
					) FROM thumb as t where t.userId = u.userId and t.commentId is not null and tread=0
				)
			 ) AS thumb,
			 JSON_OBJECT(
			 'video',(
				  select JSON_ARRAYAGG(
					  JSON_OBJECT('id',t.vId)
					) FROM thumb as t where t.userId = u.userId and t.vId is not null and tread=1
				),
				'comment',(
				select JSON_ARRAYAGG(
					  JSON_OBJECT('id',t.commentId)
					) FROM thumb as t where t.userId = u.userId and t.commentId is not null and tread=1
				)
			 ) AS tread
       from user as u
       LEFT JOIN subscriber as sub on u.userId = sub.userId
       where u.userId=?
       GROUP BY u.userId`;
      const result = await connection.execute(sql,[userId]);
      return  result[0];
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  async userVideoCountService(ctx,userId,keyword){
    try{
      const sql=`
      select count(v.id) as count
      from video as v
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      where vf.mark = "cover" and v.userId=? ${keyword!==""? `and v.name like '%${keyword}%'` : ''}
      ORDER BY v.createTime desc`;
      const result = await connection.execute(sql,[userId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  //获取用户视频
  async userVideoService(ctx,userId,offset,limit,keyword){
    try{
      const sql=`
      select v.id,v.name,v.playCount,v.dt,v.description,v.createTime,v.updateTime,f.picUrl,
       (select JSON_OBJECT(
			  'userId',v.userId,
				'userName',u.userName,
				'avatarUrl',u.avatarUrl
			 ) from user as u WHERE u.userId = v.userId) as user,
			 (select JSON_OBJECT(
			  'id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) from category as c where c.id = v.cateId) as category,
			 (select JSON_ARRAYAGG(
			   JSON_OBJECT('id',t.id,'name',t.name,'createTime',t.createTime,'updateTime',t.updateTime)
			 ) FROM tag as t LEFT JOIN tag_video as tv on tv.tId = t.id where tv.vId = v.id) as tag
       from video as v
       LEFT JOIN video_file as vf on vf.videoId = v.id
       LEFT JOIN file as f on f.id = vf.fileId
       where vf.mark = "cover" and v.userId=? ${keyword!==""? `and v.name like '%${keyword}%'` : ''}
       ORDER BY v.createTime desc
       limit ?,? `;
     const result = await connection.execute(sql,[userId,offset,limit]);
     const count = await new UserService().userVideoCountService(ctx,userId,keyword);
     return {
       count:count[0].count,
       list:result[0]
     }
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  async getAllUserCountService(ctx){
    try{
      const sql=`select count(u.userId) as count
                 from user as u`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  async getAllUserService(ctx,offset,limit){
    try{
      const sql =`select u.userId,u.userName,u.avatarUrl,u.createTime,u.updateTime,history,isExplore
                  from user as u
                  limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new UserService().getAllUserCountService(ctx);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
}
module.exports=new UserService();
