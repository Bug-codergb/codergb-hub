import { ICate } from '../category/ICate';
import { ITag } from '../tag/ITag';
import { IUserMsg } from '../user/IUserMsg';
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
  tag: ITag[];
}

interface IVideoFile {
  id: string;
  originalname: string;
  filename: string;
  vid: string;
  name: string;
}
interface IVideoSource {
  name: string;
  chunk: string[];
  count: number;
  videos: IVideoFile[];
}
export type { IVideo, IVideoSource };
