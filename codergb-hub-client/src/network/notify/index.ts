import gbRequest from '../index';
import { IResponseType } from '../../types/responseType';
//获取所有播放列表
export function getAllNotify<T = IResponseType<any>>(id: string, offset: number, limit: number) {
  return gbRequest.get<T>({
    url: '/notify/all/' + id,
    params: {
      offset,
      limit
    }
  });
}
