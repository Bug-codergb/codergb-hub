import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
import { IRole } from '@/types/role';
export function createRole<T = IResponseType<IRole>>(name: string) {
  return gbRequest.post<T>({
    url: '/role',
    data: {
      name
    }
  });
}
