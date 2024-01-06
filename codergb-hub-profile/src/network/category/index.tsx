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
export function deleteCate<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/cate/delete/' + id
  });
}
export function createCate<T = IResponseType<any>>(name: string) {
  return gbRequest.post<T>({
    url: '/cate/',
    data: {
      name
    }
  });
}
export function updateCate<T = IResponseType<any>>(id: string, name: string) {
  return gbRequest.post<T>({
    url: '/cate/update/' + id,
    data: {
      name
    }
  });
}
