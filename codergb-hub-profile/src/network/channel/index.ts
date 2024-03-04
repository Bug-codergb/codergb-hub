import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
export function getAllChannel<T = IResponseType<any>>(offset: number, limit: number) {
  return gbRequest.get({
    url: '/channel/all'
  });
}
// 获取用户频道
export async function getUserChannel<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: '/channel/user/' + id
  });
}
export async function updateUserChannel<T = IResponseType<any>>(
  id: string,
  name: string,
  alias: string,
  description: string,
  official: number,
  banner: string | null,
  featured: string | null,
  trailer: string | null
) {
  return await gbRequest.post<T>({
    url: '/channel/update/' + id,
    data: {
      name,
      alias,
      description,
      official,
      trailer,
      featured,
      banner
    }
  });
}
