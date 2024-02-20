import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function login<T = IResponseType<any>>(
  username: string,
  password: string
): Promise<T> {
  return await gbRequest.post<T>({
    url: '/login',
    data: {
      userName: username,
      password
    }
  });
}
export async function getLoginLog<T = IResponseType<any>>(userId: string) {
  return await gbRequest.get<T>({
    url: `/login/log/${userId}`
  });
}
export async function editUserPass<T = IResponseType<any>>(userName: string, password: string) {
  return await gbRequest.post<T>({
    url: `/login/edit`,
    data: {
      userName,
      password
    }
  });
}
