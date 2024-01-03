import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function getAllTag<T = IResponseType<any>>(offset: number, limit: number) {
  return await gbRequest.get<T>({
    url: '/tag/all',
    params: {
      offset,
      limit
    }
  });
}
