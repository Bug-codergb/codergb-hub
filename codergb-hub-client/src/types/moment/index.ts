import { type IUserMsg } from '../user/IUserMsg';
import { type IVideo } from '../video/IVideo';

interface IMoment {
  id: string;
  title: string;
  content: string;
  cId: string;
  createTime: string;
  updateTime: string;
  user: IUserMsg;
  video: IVideo;
  thumb?: number;
}
export type { IMoment };
