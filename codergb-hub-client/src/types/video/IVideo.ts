import {ICate} from "../category/ICate";
import {ITag} from "../tag/ITag";
import {IUserMsg} from "../user/IUserMsg";

interface IVideo{
  isShow:false,
  key:string,
  id:string,
  name:string,
  picUrl:string,
  playCount:string,
  dt:string,
  user:IUserMsg,
  description:string,
  createTime:string,
  updateTime:string,
  history?:string,
  category:ICate,
  tag:ITag[]
}
export type {
  IVideo
}