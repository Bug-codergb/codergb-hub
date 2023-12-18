import { IUserMsg } from '../user/IUserMsg';
import { IVideo } from '../video/IVideo';
import { IChannel } from '@/types/channel/IChannel';

interface IMoment {
  id: string;
  title: string;
  content: string;
  cId: string;
  createTime: string;
  updateTime: string;
  user: IUserMsg;
  video: IVideo;
  picUrl?: string;
  channel?: IChannel;
}
export type { IMoment };
