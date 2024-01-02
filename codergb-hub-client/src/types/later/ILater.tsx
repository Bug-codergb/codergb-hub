import { IUserMsg } from '../user/IUserMsg';
import { IVideo } from '../video/IVideo';

interface ILater {
  id: string;
  createTime: string;
  updateTime: string;
  user: IUserMsg;
  video: IVideo;
}
export type { ILater };
