import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function uploadImage<T = IResponseType<any>>(
  formData: FormData,
  getProgress: (e: any) => void
) {
  return await gbRequest.post<T>({
    url: '/image/upload',
    data: formData,
    onUploadProgress: getProgress
  });
}
export async function deleteImage<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: `/image/delete/${id}`
  });
}
