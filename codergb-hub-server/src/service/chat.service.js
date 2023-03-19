const connection=require("../app/databse");
class ChatService{
  async createService(sourceUser,targetUser,content,online){
    try{
      const id=new Date().getTime();
      const sql=`insert into chat(id,content,sourceUser,targetUser,online) values(?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,content,sourceUser,targetUser,online])
    }catch (e) {

    }
  }
  async getChatQueueCountService(targetUser){
    try{
      const sql=`select count(distinct(uc.sourceUser)) as count
      from user_chat_queue as uc
      where uc.targetUser=?
      ORDER BY uc.createTime desc`;
      const result = await connection.execute(sql,[targetUser]);
      return result[0]
    }catch (e) {

    }
  }
  async getChatQueueService(targetUser,offset,limit){
   try{
     const sql=`
     select uc.id,uc.content,(select JSON_OBJECT(
        'userId',uc.sourceUser,'userName',u.userName,'avatarUrl',u.avatarUrl
       ) from user as u where u.userId=uc.sourceUser) as sourceUser,
       (select JSON_OBJECT('userId',u.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
				from user as u where u.userId=targetUser) as targetUser,uc.createTime,uc.updateTime
     from user_chat_queue as uc
     where uc.targetUser=?
     GROUP BY uc.sourceUser
     ORDER BY uc.createTime desc
     limit ?,?`;
     const result = await connection.execute(sql,[targetUser,offset,limit]);
     const count = await new ChatService().getChatQueueCountService(targetUser);
     return {
       count:count[0].count,
       list:result[0]
     }
   } catch (e) {
     console.log(e)
   }
  }
  //判断聊天队列是否存在当前用户
  async judgeCurrentUserInQueue(targetUser,sourceUser){
    try{
      const sql=`
           select *
           from user_chat_queue as uc
           where uc.targetUser=? and uc.sourceUser=?`;
      const result = await connection.execute(sql,[targetUser,sourceUser]);
      return result[0];
    }catch (e) {

    }
  }
  async recentUserChatService(sourceUser,targetUser,content){
    try{
      const id=new Date().getTime();
      const sql=`insert into user_chat_queue(id,content,sourceUser,targetUser) values(?,?,?,?)`;
      const result = await connection.execute(sql,[id,content,sourceUser,targetUser])
    }catch (e) {

    }
  }
  async getChatContentCountService(targetUser,sourceUser){
    try{
      const sql=`select count(uc.id) as count
       from chat as uc
       where uc.targetUser=? and uc.sourceUser=? or (uc.targetUser=? and uc.sourceUser=?)
       ORDER BY uc.createTime asc`;
      const result = await connection.execute(sql,[targetUser,sourceUser,sourceUser,targetUser])
      return result[0];
    }catch (e) {

    }
  }
  async getChatContentService(targetUser,sourceUser,offset,limit){
    try{
      const sql=`
      select uc.id,uc.content,(select JSON_OBJECT(
        'userId',uc.sourceUser,'userName',u.userName,'avatarUrl',u.avatarUrl
       ) from user as u where u.userId=uc.sourceUser) as sourceUser,
       (select JSON_OBJECT('userId',u.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
				from user as u where u.userId=targetUser) as targetUser,uc.createTime,uc.updateTime
      from chat as uc
      where uc.targetUser=? and uc.sourceUser=? or (uc.targetUser=? and uc.sourceUser=?)
      ORDER BY uc.createTime asc
      limit ?,?`;
      const result = await connection.execute(sql,[targetUser,sourceUser,sourceUser,targetUser,offset,limit]);
      const count = await new ChatService().getChatContentCountService(targetUser,sourceUser);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {

    }
  }
  //更新队列第一条信息
  async updateQueueMessage(queueId,content){
    try{
      const sql=`update user_chat_queue as uc set content=? where id=?`;
      const result = await connection.execute(sql,[content,queueId]);
      return result[0];
    }catch (e) {

    }
  }
}
module.exports = new ChatService();
