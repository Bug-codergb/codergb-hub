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
  async getRecentUserCount(){
   try{
     
   } catch (e) {
     
   }
  }
  async recentUserChatService(sourceUser,targetUser,content,online){
    try{
      const id=new Date().getTime();
      const sql=`insert into user_chat_queue(id,content,sourceUser,targetUser) values(?,?,?,?)`;
      const result = await connection.execute(sql,[id,content,sourceUser,targetUser,online])
    }catch (e) {

    }
  }
}
module.exports = new ChatService();
