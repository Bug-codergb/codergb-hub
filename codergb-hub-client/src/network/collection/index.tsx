import gbRequest from '../index';
import { IResponseType } from '../../types/responseType';
export function getUserCol<T = IResponseType<any>>(id: string, offset: number, limit: number) {
  return gbRequest.post<T>({
    url: '/collection/user/' + id,
    params: {
      offset,
      limit
    }
  });
}
export function getCollectionDetail<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/collection/detail/' + id
  });
}
