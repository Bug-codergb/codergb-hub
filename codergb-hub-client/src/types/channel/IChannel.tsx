import {IUserMsg} from "../user/IUserMsg";
import {IVideo} from "../video/IVideo";

interface IChannel{
  id:string,
  name:string,
  alias:string,
  official:number,
  createTime:string,
  updateTime:string,
  user:IUserMsg,
  picUrl?:string,
  trailer?:IVideo,
  featured?:IVideo
}
export type {
  IChannel
}