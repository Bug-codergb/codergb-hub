import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
// 添加历史记录
export async function addHistory<T = IResponseType<any>>(id: string) {
  return await gbRequest.post({
    url: '/history/' + id,
    data: {}
  });
}
export async function getUserHistory<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number,
  keyword: string
) {
  return await gbRequest.post<T>({
    url: '/history/user/' + userId,
    params: {
      offset,
      limit,
      keyword
    }
  });
}
// 清除所有历史记录
export async function deleteAllHistory<T = IResponseType<any>>() {
  return await gbRequest.post<T>({
    url: '/history/delete/all'
  });
}
