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
}
module.exports=new UserService();
