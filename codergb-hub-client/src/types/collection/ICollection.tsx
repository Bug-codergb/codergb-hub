import { ICate } from '../category/ICate';
import { IUserMsg } from '../user/IUserMsg';

interface ICollection extends ICate {
  picUrl: string;
  user: IUserMsg;
  description:string,
  count?:number
}
export type { ICollection };
