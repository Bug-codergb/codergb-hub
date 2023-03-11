const {
  createService
}=require("../service/chat.service");
const contextMap=new Map();
class ChatController{
  async create(ctx,next){
    const { targetUser,sourceUser } = ctx.query;
    contextMap.set(sourceUser,ctx);
    ctx.websocket.on('message', async function(message) {
      const context = contextMap.get(targetUser);
      if(context){
        context.websocket.send(message.toString());
        await createService(sourceUser,targetUser,message.toString(),1);
      }else{
        await createService(sourceUser,targetUser,message.toString(),0);
      }
    });
    ctx.websocket.on("close",()=>{
       contextMap.delete(sourceUser);
    })
  }
}

module.exports = new ChatController();
