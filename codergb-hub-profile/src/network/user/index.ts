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
