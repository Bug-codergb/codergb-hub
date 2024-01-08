const HOST = process.env.HOST;
const SERVER_PORT = process.env.SERVER_PORT;
const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT;

const WEBPACK_SERVER_PORT = process.env.WEBPACK_SERVER_PORT;
let HOST_NAME: string = '';
let WEBSOCKET_HOST_NAME = '';
if (process.env.NODE_ENV === 'development') {
  HOST_NAME = `http://${HOST}:${WEBPACK_SERVER_PORT}`;
  WEBSOCKET_HOST_NAME = `ws://${HOST}:${WEBSOCKET_PORT}`;
} else if (process.env.NODE_ENV === 'production') {
  HOST_NAME = `http://${HOST}:${SERVER_PORT}`;
  WEBSOCKET_HOST_NAME = `ws://${HOST}:${WEBSOCKET_PORT}`;
}

console.log(HOST_NAME);
console.log(process.env.HOST);
export { HOST_NAME, WEBSOCKET_HOST_NAME };
