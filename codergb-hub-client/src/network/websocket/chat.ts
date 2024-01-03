import { WEBSOCKET_HOST_NAME } from '../../constant/host';
import { type IResponseType } from '../../types/responseType';

class CommonWebSocket {
  websocket: WebSocket;
  constructor(url: string, params: any) {
    const keys = Object.keys(params);
    let query = '';
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      query += `${key}=${params[key]}${i === keys.length - 1 ? '' : '&'}`;
    }
    const socketUrl = `${url}?${query}`;
    this.websocket = new WebSocket(`${WEBSOCKET_HOST_NAME}${socketUrl}`);
  }

  // 废弃
  async getSocketMsg<T>() {
    return await new Promise<IResponseType<T>>((resolve, reject) => {
      this.websocket.onmessage = function (e) {
        const res: IResponseType<T> = JSON.parse(e.data);
        resolve(res);
      };
    });
  }

  sendSocketMsg(params: string) {
    console.log(this.websocket.readyState);
    this.websocket.send(params);
  }
}
const CHAT_QUEUE = '/chat/queue';
const CHAT = '/chat';
const CHAT_CONTENT = '/chat/content';
export { CommonWebSocket, CHAT_QUEUE, CHAT, CHAT_CONTENT };
