import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function getAllBlock<T = IResponseType<any>>() {
  return await gbRequest.get<T>({
    url: '/block/all'
  });
}
export async function userAddBlock<T = IResponseType<any>>(blockId: string) {
  return await gbRequest.post<T>({
    url: '/block/user/add',
    data: {
      blockId
    }
  });
}
export async function getUserBlock<T = IResponseType<any>>(userId: string) {
  return await gbRequest.get<T>({
    url: `/block/user/${userId}`
  });
}
//删除用户板块
export function deleteUserBlock<T=IResponseType<any>>(userId:string,blockId:string){
  return gbRequest.post<T>({
    url:`/block/user/delete`,
    data:{
      userId,
      blockId
    }
  })
}