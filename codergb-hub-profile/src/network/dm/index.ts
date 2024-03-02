import { IResponseType } from '@/types/responseType';
import gbRequest from '../index';
export function deleteDm<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/dm/delete/' + id
  });
}
export function updateDm<T = IResponseType<any>>(id: string, content: string) {
  return gbRequest.post<T>({
    url: '/dm/update/' + id,
    data: {
      content
    }
  });
}
