import { type ICate } from '../category/ICate';
import { type ITag } from '../tag/ITag';
import { type IUserMsg } from '../user/IUserMsg';

interface IVideo {
  isShow: false;
  key: string;
  id: string;
  name: string;
  picUrl: string;
  playCount: string;
  dt: string;
  user: IUserMsg;
  description: string;
  createTime: string;
  updateTime: string;
  history?: string;
  category: ICate;
  isShort: number;
  tag: ITag[];
}

interface ICarousel {
  id: string;
  title: string;
  description: string;
  videoId: string;
  picUrl: string;
  createTime: string;
}
export type { IVideo, ICarousel };
