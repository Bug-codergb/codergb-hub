import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function getExplore<T = IResponseType<any>>() {
  return await gbRequest.post<T>({
    url: '/user/all',
    params: {
      isExplore: 1
    }
  });
}
