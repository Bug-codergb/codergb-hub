import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function pubDm<T = IResponseType<any>>(vId: string, text: string, time: string) {
  return await gbRequest.post<T>({
    url: '/dm',
    data: {
      vId,
      text,
      time
    }
  });
}
// 获取视频弹幕
export async function getVideoDm<T = IResponseType<any>>(vId: string) {
  return await gbRequest.post<T>({
    url: '/dm/video/' + vId
  });
}
