const {
  createService,
  recentUserChatService,
  getChatQueueService,
  getChatContentService
}=require("../service/chat.service");
const contextMap=new Map();

class ChatController{
  async create(ctx,next){
    const { targetUser,sourceUser } = ctx.query;
    contextMap.set(sourceUser,ctx);
    ctx.websocket.on('message', async function(message) {
      const context = contextMap.get(targetUser);
      const self = contextMap.get(sourceUser);
      if(context){
        await createService(sourceUser,targetUser,message.toString(),1);
        context.websocket.send(message.toString());
      }else{
        await createService(sourceUser,targetUser,message.toString(),0);
      }
      const data = await getChatQueueService(targetUser,'0','150000');
      if(data && data.list && data.list.length!==0) {
        const isExists = data.list.findIndex((item) => {
          return item.sourceUser.userId=== sourceUser && item.targetUser.userId === targetUser;
        })
        if (isExists === -1) {
          await recentUserChatService(sourceUser, targetUser, message.toString());
        }
      }else if(data && data.list.length===0){
        await recentUserChatService(sourceUser, targetUser, message.toString());
      }
      if(self) self.websocket.send('success');
    });
    ctx.websocket.on("close",()=>{
      console.log("12")
       contextMap.delete(sourceUser);
    })
  }
  async getChatQueue(ctx,next){
    try{
      const { targetUser="",offset="0",limit="30" } = ctx.query;
      const data = await getChatQueueService(targetUser,offset,limit);
      let res={
        status:200,
        data:data
      }
      ctx.websocket.send(JSON.stringify(res));
      ctx.websocket.on("message",async function(e){
        if(e.toString()==="pull"){
          console.log("拉队列")
          const result = await getChatQueueService(targetUser,offset,limit);
          let res={
            status:200,
            data:result
          }
          ctx.websocket.send(JSON.stringify(res))
        }
      })
    }catch (e) {

    }
  }
  async getChatContent(ctx,next){
    try{
      const {targetUser="",sourceUser="",offset="0",limit="30"} = ctx.query;
      const result = await getChatContentService(targetUser,sourceUser,offset,limit);
      let res={
        status:200,
        data:result
      }
      ctx.websocket.send(JSON.stringify(res));
      ctx.websocket.on('message',async function(e){
        console.log(e.toString());
        if(e.toString()==="pull"){
          const result = await getChatContentService(targetUser,sourceUser,offset,limit);
          let res={
            status:200,
            data:result
          }
          ctx.websocket.send(JSON.stringify(res))
        }
      })
    }catch (e) {

    }
  }
}

module.exports = new ChatController();
