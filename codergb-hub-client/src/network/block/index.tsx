import gbRequest from '../index';
import { IResponseType } from '../../types/responseType';
export function getAllBlock<T = IResponseType<any>>() {
  return gbRequest.get<T>({
    url: '/block/all'
  });
}
export function userAddBlock<T = IResponseType<any>>(blockId: string) {
  return gbRequest.post<T>({
    url: '/block/user/add',
    data: {
      blockId
    }
  });
}
export function getUserBlock<T = IResponseType<any>>(userId: string) {
  return gbRequest.get<T>({
    url: `/block/user/${userId}`
  });
}
