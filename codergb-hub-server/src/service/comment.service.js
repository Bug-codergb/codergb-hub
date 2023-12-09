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
			 ) as reply,
			 (select count(t.userId) from thumb as t where t.commentId = c.id and t.tread=0) as thumb
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
			) as reply,
			 (select count(t.userId) from thumb as t where t.commentId = c.id and t.tread=0) as thumb
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
  async sysCommentCountService(ctx){
    try{
      const sql=`
      select count(distinct(c.id)) as count
      from comment as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN video as v on v.id = c.vId
      LEFT JOIN moment as m on m.id = c.mId
      LEFT JOIN comment as rep on rep.replyId = c.id`;
      const result = await connection.execute(sql)
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async sysCommentService(ctx,offset,limit){
    try{
      const sql=`
      select distinct(c.id),c.content,c.createTime,c.updateTime,
			JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user,
			if(c.vId is not null,JSON_OBJECT('id',v.id,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',
			            v.description,'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',(
									  select f.picUrl from video_file as vf LEFT JOIN file as f on vf.fileId = f.id where vf.mark="cover" and vf.videoId = v.id
									)),null) as video,
			if(c.mId is not null ,JSON_OBJECT('id',m.id,'title',m.title,'content',m.content,'createTime',m.createTime,'updateTime',m.updateTime,
			   'picUrl',(
									  select f.picUrl from video_file as vf LEFT JOIN file as f on vf.fileId = f.id where vf.mark="cover" and vf.videoId = m.vid
									)),null) as        moment,
			if(c.replyId is not null,JSON_OBJECT(
			 'id',c.id,'content',c.content,'createTime',c.createTime,'updateTime',c.updateTime
			),null) as reply
      from comment as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN video as v on v.id = c.vId
      LEFT JOIN moment as m on m.id = c.mId
      LEFT JOIN comment as rep on rep.replyId = c.id
      limit ?,?`;
      const result =await connection.execute(sql,[offset,limit]);
      const count = await new CommentService().sysCommentCountService(ctx);
      return{
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteComService(ctx,id){
    try{
      const sql=`delete from comment where id =?`;
      const result = await connection.execute(sql,[id]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async userCommentCountService(ctx,userId){
    try{
      const sql=`
      select count(distinct(c.id)) as count
      from comment as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN video as v on v.id = c.vId
      LEFT JOIN moment as m on m.id = c.mId
      LEFT JOIN comment as rep on rep.replyId = c.id
      where c.userId=?`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async userCommentService(ctx,userId,offset,limit){
    try{
      const sql=`
      select distinct(c.id),c.content,c.createTime,c.updateTime,
			JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user,
			if(c.vId is not null,JSON_OBJECT('id',v.id,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',
			            v.description,'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',(
									  select f.picUrl from video_file as vf LEFT JOIN file as f on vf.fileId = f.id where vf.mark="cover" and vf.videoId = v.id
									)),null) as video,
			if(c.mId is not null ,JSON_OBJECT('id',m.id,'title',m.title,'content',m.content,'createTime',m.createTime,'updateTime',m.updateTime,
			   'picUrl',(
									  select f.picUrl from video_file as vf LEFT JOIN file as f on vf.fileId = f.id where vf.mark="cover" and vf.videoId = m.vid
									)),null) as        moment,
			if(c.replyId is not null,JSON_OBJECT(
			 'id',c.id,'content',c.content,'createTime',c.createTime,'updateTime',c.updateTime
			),null) as reply
      from comment as c
      LEFT JOIN user as u on u.userId = c.userId
      LEFT JOIN video as v on v.id = c.vId
      LEFT JOIN moment as m on m.id = c.mId
      LEFT JOIN comment as rep on rep.replyId = c.id
      where c.userId=?
      limit ?,?`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new CommentService().userCommentCountService(ctx,userId);
      return {
        list:result[0],
        count:count[0].count
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new CommentService();
