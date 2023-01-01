import {IUserMsg} from "../user/IUserMsg";

interface IPlaylist{
  id:string,
  name:string,
  description:string,
  createTime:string,
  updateTime:string,
  isPublic:number,
  user:IUserMsg
}
export type{
  IPlaylist
}