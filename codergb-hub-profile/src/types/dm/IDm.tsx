import { IUserMsg } from '../user/IUserMsg';
import { IVideo } from '@/types/video/IVideo';

interface IDm {
  id: string;
  text: string;
  time: string;
  createTime: string;
  updateTime: string;
  video: IVideo;
  user: IUserMsg;
}
export type { IDm };
