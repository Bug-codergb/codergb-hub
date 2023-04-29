import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
interface IVCol {
  id: string;
  sort: number;
}
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
export function createCol<T = IResponseType<any>>(
  name: string,
  cover: string,
  userId: string,
  desc: string
) {
  return gbRequest.post<T>({
    url: '/collection',
    data: {
      name,
      cover,
      userId,
      description: desc
    }
  });
}
export function addVideoToCol<T = IResponseType<any>>(vId: IVCol[], cId: string) {
  return gbRequest.post<T>({
    url: '/collection/video',
    data: {
      vId,
      cId
    }
  });
}
export function deleteCol<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/collection/delete/' + id
  });
}
export type { IVCol };
