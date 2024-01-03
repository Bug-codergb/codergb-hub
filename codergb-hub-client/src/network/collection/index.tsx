import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function getUserCol<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/collection/user/' + id,
    params: {
      offset,
      limit
    }
  });
}
export async function getCollectionDetail<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/collection/detail/' + id
  });
}
