let HOST_NAME = '';
let WEBSOCKET_HOST_NAME = '';
if (process.env.NODE_ENV === 'development') {
  HOST_NAME = 'http://localhost:8888';
  WEBSOCKET_HOST_NAME = 'ws://localhost:8989';
} else if (process.env.NODE_ENV === 'production') {
  HOST_NAME = 'http://8.140.110.78:8888';
  WEBSOCKET_HOST_NAME = 'ws://8.140.110.78:8989';
}
export { HOST_NAME, WEBSOCKET_HOST_NAME };
