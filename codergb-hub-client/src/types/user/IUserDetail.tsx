import { IUserMsg } from './IUserMsg';
interface idString {
  id: string;
}
interface IUserOperator {
  video: idString[];
  comment: idString[];
}
interface IUserDetail extends IUserMsg {
  subscriber: IUserMsg[];
  thumb: IUserOperator;
  tread: IUserOperator;
}
export type { IUserDetail };
