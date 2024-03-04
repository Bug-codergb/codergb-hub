import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function userUploadAvatar<T = IResponseType<any>>(
  formData: FormData,
  getProgress: (e: any) => void,
  userId: string
): Promise<T> {
  return await gbRequest.post<T>({
    url: `/user/avatar/upload/${userId}`,
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    },
    onUploadProgress: getProgress
  });
}
// 更换用户头像
export async function updateAvatar<T = IResponseType<any>>(
  id: string,
  formData: FormData,
  getProgress: (e: any) => void
) {
  return await gbRequest.post<T>({
    url: '/user/avatar/update/' + id,
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    },
    onUploadProgress: getProgress
  });
}
// 获取userMsg
export async function getUserMsg<T = IResponseType<any>>(userId: string) {
  return await gbRequest.post<T>({
    url: `/user/msg/${userId}`
  });
}
// 获取用户媒体库
export async function getUserLibrary<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: `/user/library/` + id
  });
}
export async function getUserFans<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: `/user/fans/${id}`,
    params: {
      offset,
      limit
    }
  });
}
export async function getLoginMsg<T = IResponseType<any>>(userId: string): Promise<T> {
  return await gbRequest.get<T>({
    url: `/login/user-msg/${userId}`
  });
}
