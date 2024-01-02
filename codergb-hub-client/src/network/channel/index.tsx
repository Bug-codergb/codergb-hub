import gbRequest from '../index';
import { IResponseType } from '../../types/responseType';
//上传频道头像
export function uploadAvatar<T = IResponseType<any>>(
  formData: FormData,
  getProgress: (progress: any) => void
): Promise<T> {
  return gbRequest.post<T>({
    url: '/channel/avatar/upload',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    },
    onUploadProgress(progressEvent: any) {
      getProgress(progressEvent);
    }
  });
}
export function updateChannel<T = IResponseType<any>>(id: string, params: object) {
  return gbRequest.post<T>({
    url: `/channel/${id}`,
    data: params
  });
}
//获取用户频道
export function getUserChannel<T = IResponseType<any>>(id: string) {
  return gbRequest.get<T>({
    url: '/channel/user/' + id
  });
}
