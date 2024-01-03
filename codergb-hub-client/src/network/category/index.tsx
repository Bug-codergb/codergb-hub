import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function getAllCate<T = IResponseType<any>>(offset: number, limit: number) {
  return await gbRequest.get<T>({
    url: '/cate/all',
    params: {
      offset,
      limit
    }
  });
}
export async function getCateExplore<T = IResponseType<any>>() {
  return await gbRequest.get<T>({
    url: '/cate/explore'
  });
}
