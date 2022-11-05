const connection =  require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class CommentService{
  async createService(ctx,id,alias,content,userId){
    try{
      const uniqueId = new Date().getTime();
      const sql=`insert into comment(id,content,userId,${alias}) values(?,?,?,?)`;
      const result = await connection.execute(sql,[uniqueId,content,userId,id]);

      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async replyService(ctx,id,content,userId){
    try{
      const uniqueId = new Date().getTime();
      const sql='insert into comment (id,content,replyId,userId) values(?,?,?,?)';
      const result = await connection.execute(sql,[uniqueId,content,id,userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allCommentCountService(ctx,alias,id){
    try{
      const sql=`select count(c.id) as count
            from comment as c
            LEFT JOIN user as u on u.userId = c.userId
            where replyId is null and ${alias}=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allCommentService(ctx,offset,limit,alias,id){
    try{
      const sql=`select c.id,c.content,c.createTime,c.updateTime,
			 JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user,
			 (
			  select count(com.id) as count
       from comment as com
        WHERE FIND_IN_SET(com.id,getAllComment(c.id)) and com.id!=c.id
			 ) as reply
       from comment as c
       LEFT JOIN user as u on u.userId = c.userId
       where replyId is null and ${alias}=?
       limit ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const count = await new CommentService().allCommentCountService(ctx,alias,id);
      return {
        count:count[0].count,
        list:result[0],
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allReplyServiceCount(ctx,id){
    try{
     const sql=`select count(c.id) as count
                from comment as c
                WHERE FIND_IN_SET(id,getAllComment(${id})) and id!=?`;
     const result = await connection.execute(sql,[id]);
     return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async allReplyService(ctx,offset,limit,id){
    try{
      const sql=`
      select c.id,c.content,(select JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
											FROM user as u WHERE u.userId = c.userId) as user,
			c.createTime,c.updateTime,(
			  select JSON_OBJECT(
				'id',com.id,'content',com.content,'createTime',com.createTime,'updateTime',com.updateTime,
			  'user',JSON_OBJECT('userId',com.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
				)
				from comment as com
				LEFT JOIN user as u on u.userId = com.userId
				WHERE com.id = c.replyId
			) as reply
       from comment as c
       WHERE FIND_IN_SET(id,getAllComment(${id})) and id!=?
       limit ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const count = await new CommentService().allReplyServiceCount(ctx,id);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new CommentService();
