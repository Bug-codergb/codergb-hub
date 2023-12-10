import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
export function login<T = IResponseType<any>>(username: string, password: string): Promise<T> {
  return gbRequest.post<T>({
    url: '/login',
    data: {
      userName: username,
      password: password
    }
  });
}
export function register<T = IResponseType<any>>(username: string, password: string): Promise<T> {
  return gbRequest.post<T>({
    url: '/register',
    data: {
      userName: username,
      password: password
    }
  });
}
