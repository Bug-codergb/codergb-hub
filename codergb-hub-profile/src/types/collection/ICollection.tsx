import { ICate } from '@/types/category/ICate';
import { IUserMsg } from '@/types/user/IUserMsg';

interface ICollection extends ICate {
  picUrl: string;
  user: IUserMsg;
  description: string;
  imgId?: string;
}
export type { ICollection };
