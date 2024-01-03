import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
// 点赞
export async function thumb<T = IResponseType<any>>(id: string, alias: string) {
  return await gbRequest.post<T>({
    url: '/thumb',
    data: {
      id,
      alias
    }
  });
}
// 取消点赞
export async function cancelThumb<T = IResponseType<any>>(id: string, alias: string) {
  return await gbRequest.post<T>({
    url: '/thumb/cancel',
    data: {
      id,
      alias
    }
  });
}
// 踩
export async function tread<T = IResponseType<any>>(id: string, alias: string) {
  return await gbRequest.post<T>({
    url: '/tread',
    data: {
      id,
      alias
    }
  });
}
export async function cancelTread<T = IResponseType<any>>(id: string, alias: string) {
  return await gbRequest.post<T>({
    url: '/tread/cancel',
    data: {
      id,
      alias
    }
  });
}
// 获取视频点赞数
export async function getVideoThumb<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: 'thumb/video/' + id
  });
}
