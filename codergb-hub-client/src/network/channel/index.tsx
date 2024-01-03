import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
// 上传频道头像
export async function uploadAvatar<T = IResponseType<any>>(
  formData: FormData,
  getProgress: (progress: any) => void
): Promise<T> {
  return await gbRequest.post<T>({
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
export async function updateChannel<T = IResponseType<any>>(id: string, params: object) {
  return await gbRequest.post<T>({
    url: `/channel/${id}`,
    data: params
  });
}
// 获取用户频道
export async function getUserChannel<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: '/channel/user/' + id
  });
}
