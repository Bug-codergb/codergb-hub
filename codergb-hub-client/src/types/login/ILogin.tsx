import {IUserMsg} from "../user/IUserMsg";
import {IUserDetail} from "../user/IUserDetail";

interface ILogin{
  userMsg:IUserMsg,
  userDetail:IUserDetail,
  loginType:number
}
export type{
  ILogin
}