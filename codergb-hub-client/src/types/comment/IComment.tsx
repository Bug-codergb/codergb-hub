import { IUserMsg } from '../user/IUserMsg';
import { IVideo } from '../video/IVideo';
import { IMoment } from '../moment';

interface IComment {
  id: string;
  content: string;
  createTime: string;
  updateTime: string;
  user: IUserMsg;
  reply?: IComment | number;
  video?: IVideo;
  moment?: IMoment;
  thumb?: number;
}
export type { IComment };
