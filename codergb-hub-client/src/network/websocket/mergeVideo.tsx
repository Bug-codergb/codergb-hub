async function socketOpen(websocket: WebSocket) {
  return await new Promise((resolve, reject) => {
    websocket.onopen = function () {
      console.log('socket 建立成功');
      websocket.send('open');
      resolve(true);
    };
  });
}
async function getSocketMsg(websocket: WebSocket, handle: (progress: number) => void) {
  return await new Promise<string>((resolve, reject) => {
    websocket.onmessage = function (e) {
      const res = JSON.parse(e.data);
      const percent = res.percent ? res.percent : 0;
      if (res.isProgress === false) {
        resolve(res.id);
      } else {
        handle(percent);
      }
    };
  });
}
async function socketClose(websocket: WebSocket, videoId: string) {
  return await new Promise((resolve, reject) => {
    websocket.onclose = function () {
      console.log('socket 关闭');
      resolve({
        status: 200,
        data: {
          id: videoId
        }
      });
    };
  });
}
export { socketOpen, socketClose, getSocketMsg };
