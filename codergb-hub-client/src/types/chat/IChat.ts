import {IUserMsg} from "../user/IUserMsg";

interface IChatQueue{
  id:string;
  content:string;
  createTime:string;
  updateTime:string;
  sourceUser:IUserMsg,
  targetUser:IUserMsg
}
export type{
  IChatQueue
}