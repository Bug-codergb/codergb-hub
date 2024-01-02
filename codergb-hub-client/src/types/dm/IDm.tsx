import { IUserMsg } from '../user/IUserMsg';

interface IDm {
  id: string;
  text: string;
  time: string;
  createTime: string;
  updateTime: string;
  user: IUserMsg;
}
export type { IDm };
