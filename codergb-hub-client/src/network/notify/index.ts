import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
// 获取所有播放列表
export async function getAllNotify<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number,
  isRead?: number
) {
  return await gbRequest.get<T>({
    url: '/notify/all/' + id,
    params: {
      offset,
      limit,
      isRead
    }
  });
}
// 更新消息状态
export async function updateNotify<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/notify/update/' + id
  });
}
