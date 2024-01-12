let HOST_NAME = '';
let WEBSOCKET_HOST_NAME = '';
if (process.env.NODE_ENV === 'development') {
  HOST_NAME = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_WEBPACK_SERVER_PORT}`;
  WEBSOCKET_HOST_NAME = 'ws://localhost:8989';
} else if (process.env.NODE_ENV === 'production') {
  HOST_NAME = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_SERVER_PORT}`;
  WEBSOCKET_HOST_NAME = `ws://${process.env.VUE_APP_HOST}:8989`;
}
export { HOST_NAME, WEBSOCKET_HOST_NAME };
