import { type IComment } from '../comment/IComment';
import { type IMoment } from '../moment';
import { ISubscriber } from '../subscriber/ISubscriber';
import { type IUserMsg } from '../user/IUserMsg';
import { type IVideo } from '../video/IVideo';

interface INotify {
  id: string;
  content: string;
  userId: string;
  operation: IUserMsg;
  isRead: number;
  createTime: string;
  updateTime: string;
  type: string;
  video?: IVideo;
  comment?: IComment;
  moment?: IMoment;
  aliaId?: string;
}
export type { INotify };
