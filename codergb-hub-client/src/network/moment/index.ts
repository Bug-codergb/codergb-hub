import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function createMoment<T = IResponseType<any>>(
  title: string,
  content: string,
  vid: string,
  userId: string,
  cId: string
) {
  return await gbRequest.post<T>({
    url: '/moment',
    data: {
      title,
      content,
      vid,
      cId,
      userId
    }
  });
}
export async function getChannelMoment<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/moment/channel/' + id,
    params: {
      offset,
      limit
    }
  });
}
export async function getMomentDetail<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/moment/' + id
  });
}
export async function deleteMoment<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/moment/delete/' + id
  });
}
