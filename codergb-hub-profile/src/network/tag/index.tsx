import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
export function getAllTag<T = IResponseType<any>>(offset: number, limit: number) {
  return gbRequest.get<T>({
    url: '/tag/all',
    params: {
      offset,
      limit
    }
  });
}
