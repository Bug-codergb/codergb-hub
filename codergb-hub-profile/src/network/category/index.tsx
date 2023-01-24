import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
export function getAllCate<T = IResponseType<any>>(offset: number, limit: number, keyword: string) {
  return gbRequest.get<T>({
    url: '/cate/all',
    params: {
      offset,
      limit,
      keyword: keyword
    }
  });
}
export function getCateExplore<T = IResponseType<any>>() {
  return gbRequest.get<T>({
    url: '/cate/explore'
  });
}