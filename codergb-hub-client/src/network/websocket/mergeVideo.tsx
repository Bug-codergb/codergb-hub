function socketOpen(websocket:WebSocket){
  return new Promise((resolve,reject)=>{
    websocket.onopen=function (){
      console.log("socket 建立成功");
      websocket.send("open");
      resolve(true);
    }
  })
}
function getSocketMsg(websocket:WebSocket,handle:(progress:number)=>void){
  return new Promise<string>((resolve,reject)=>{
    websocket.onmessage=function(e){
      let res = JSON.parse(e.data);
      let percent = res.percent? res.percent : 0;
      if(res.isProgress===false){
        resolve(res.id);
      }else{
        handle(percent);
      }
    }
  })
}
function socketClose(websocket:WebSocket,videoId:string){
  return new Promise((resolve,reject)=>{
    websocket.onclose = function(){
      console.log("socket 关闭");
      resolve({
        status:200,
        data:{
          id:videoId
        }
      })
    }
  })
}
export {
  socketOpen,
  socketClose,
  getSocketMsg
}