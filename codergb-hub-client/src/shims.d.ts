import { type IUploadVideo } from './types/imperative/uploadVideo';

interface Window {
  videoWebsocket?: WebSocket;
  videoInfo?: IUploadVideo;
}
