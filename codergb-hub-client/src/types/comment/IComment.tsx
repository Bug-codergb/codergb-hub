import {IUserMsg} from "../user/IUserMsg";

interface IComment{
  id:string,
  content:string,
  createTime:string,
  updateTime:string,
  user:IUserMsg,
  reply?:IComment|number
}
export type{
  IComment
}