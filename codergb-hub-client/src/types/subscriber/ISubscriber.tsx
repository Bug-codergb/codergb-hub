import {IUserMsg} from "../user/IUserMsg";
import {IChannel} from "../channel/IChannel";

interface ISubscriber{
  id:string,
  up:IUserMsg,
  channel:IChannel,
  createTime:string,
  updateTime:string,
  video?:number,
  fans?:number
}
export type{
  ISubscriber
}