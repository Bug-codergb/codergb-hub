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
