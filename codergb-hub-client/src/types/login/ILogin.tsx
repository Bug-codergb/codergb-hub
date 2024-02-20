import { type IUserMsg } from '../user/IUserMsg';
import { type IUserDetail } from '../user/IUserDetail';

interface ILogin {
  userMsg: IUserMsg;
  userDetail: IUserDetail;
  loginType: number;
}
export type { ILogin };
