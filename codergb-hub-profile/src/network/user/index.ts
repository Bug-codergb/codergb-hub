import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
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
export function createUser<T = IResponseType<any>>(data: any) {
  return gbRequest.post<T>({
    url: `/user/add`,
    data: data
  });
}
export function updateUser<T = IResponseType<any>>(data: any) {
  return gbRequest.post<T>({
    url: `/user/update`,
    data: data
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
//删除用户
export async function deleteUser<T = IResponseType<any>>(userId: string) {
  return await gbRequest.post<T>({
    url: `/user/delete/${userId}`
  });
}
