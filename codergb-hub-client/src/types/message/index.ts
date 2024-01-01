import { IComment } from "../comment/IComment";
import { ISubscriber } from "../subscriber/ISubscriber";
import { IVideo } from "../video/IVideo";

interface INotify{
  id: string;
  content: string;
  userId: string;
  operation: ISubscriber,
  isRead: number,
  createTime: string;
  updateTime: string;
  type: string;
  video?: IVideo;
  comment?: IComment
  aliaId?:string
}
export type {
  INotify
  
}