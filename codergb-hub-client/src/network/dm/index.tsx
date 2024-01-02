import gbRequest from '../index';
import { IResponseType } from '../../types/responseType';
export function pubDm<T = IResponseType<any>>(vId: string, text: string, time: string) {
  return gbRequest.post<T>({
    url: '/dm',
    data: {
      vId: vId,
      text: text,
      time: time
    }
  });
}
//获取视频弹幕
export function getVideoDm<T = IResponseType<any>>(vId: string) {
  return gbRequest.post<T>({
    url: '/dm/video/' + vId
  });
}
