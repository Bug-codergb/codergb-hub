import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';

export async function getUserLater<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number
): Promise<T> {
  return await gbRequest.get<T>({
    url: '/later/user/' + userId,
    params: {
      offset,
      limit
    }
  });
}
// 添加至稍后观看
export async function addLater<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/later/' + id
  });
}
