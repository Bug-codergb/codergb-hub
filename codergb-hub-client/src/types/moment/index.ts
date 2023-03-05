import {IUserMsg} from "../user/IUserMsg";
import {IVideo} from "../video/IVideo";

interface IMoment{
  id:string,
  title:string,
  content:string,
  cId:string,
  createTime:string,
  updateTime:string,
  user:IUserMsg,
  video:IVideo
}
export type{
  IMoment
}