import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
import { IRole } from '@/types/role';
export function createRole<T = IResponseType<IRole>>(name: string) {
  return gbRequest.post<T>({
    url: '/role',
    data: {
      name
    }
  });
}
export function getAllRole<T = IResponseType<IRole>>() {
  return gbRequest.get<T>({
    url: '/role/all',
    params: {
      limit: 300000,
      offset: 0
    }
  });
}

export function setUserRole<T = IResponseType<any>>(data: Record<string, any>) {
  return gbRequest.post<T>({
    url: '/role/user/set',
    method: 'post',
    data
  });
}
export function deleteRole<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: `/role/delete/${id}`
  });
}
export function updateRole<T = IResponseType<any>>(id: string, name: string){
  return gbRequest.post<T>({
    url: `/role/update/${id}`,
    data: {
      name
    }
  });
}
