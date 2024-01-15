let HOST_NAME = '';
let WEBSOCKET_HOST_NAME = '';
if (import.meta.env.VITE_NODE_ENV === 'development') {
  HOST_NAME = `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_WEBPACK_SERVER_PORT}`;
  WEBSOCKET_HOST_NAME = 'ws://localhost:8989';
} else if (import.meta.env.VITE_NODE_ENV === 'production') {
  HOST_NAME = `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_SERVER_PORT}`;
  WEBSOCKET_HOST_NAME = `ws://${import.meta.env.VITE_HOST}:8989`;
}
export { HOST_NAME, WEBSOCKET_HOST_NAME };
