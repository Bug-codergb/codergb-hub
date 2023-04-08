import { IResponseType } from '@/types/responseType';
import gbRequest from '../index';
export function getAllComment<T = IResponseType<any>>(offset: number, limit: number) {
  return gbRequest.post<T>({
    url: '/comment/all',
    params: {
      offset,
      limit
    }
  });
}
export function deletComment<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/comment/delete/' + id
  });
}
