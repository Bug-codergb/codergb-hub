import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
export function getColDetail<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/collection/detail/' + id
  });
}
export function delColVideo<T = IResponseType<any>>(cId: string, vId: string) {
  return gbRequest.post<T>({
    url: '/collection/video/delete/' + `${cId}/${vId}`
  });
}
