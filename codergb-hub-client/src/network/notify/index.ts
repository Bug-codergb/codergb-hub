import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
// 获取所有播放列表
export async function getAllNotify<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.get<T>({
    url: '/notify/all/' + id,
    params: {
      offset,
      limit
    }
  });
}
