import { IResponseType } from '@/types/responseType';
import gbRequest from '..';
export function notify<T = IResponseType<any>>(content: string, userId: string, operation: string) {
  return gbRequest.post<T>({
    url: '/notify',
    data: {
      content,
      userId,
      operation
    }
  });
}
