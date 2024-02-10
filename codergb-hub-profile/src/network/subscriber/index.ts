import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function sub<T = IResponseType<any>>(upId: string) {
  return await gbRequest.post<T>({
    url: '/sub/',
    data: {
      upId
    }
  });
}
export async function cancelSub<T = IResponseType<any>>(upId: string) {
  return await gbRequest.post<T>({
    url: '/sub/cancel',
    data: {
      upId
    }
  });
}
// 获取用户订阅
export async function getUserSub<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/sub/user/' + userId,
    data: {
      offset,
      limit
    }
  });
}
// 获取订阅数
export async function getUserSubCount<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: '/sub/count/' + id
  });
}
