import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
export function getAllChannel<T = IResponseType<any>>(offset: number, limit: number) {
  return gbRequest.get({
    url: '/channel/all'
  });
}
