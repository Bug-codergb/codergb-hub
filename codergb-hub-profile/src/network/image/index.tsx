import gbRequest from '../index';
import { IResponseType } from '../../types/responseType';
export function uploadImage<T = IResponseType<any>>(
  formData: FormData,
  getProgress: (e: any) => void
) {
  return gbRequest.post<T>({
    url: '/image/upload',
    data: formData,
    onUploadProgress: getProgress
  });
}
export function deleteImage<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: `/image/delete/${id}`
  });
}
