import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
// 获取所有评论
export async function getAllComment<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number,
  alias: string
) {
  return await gbRequest.get<T>({
    url: '/comment/all/' + id,
    params: {
      offset,
      limit,
      alias
    }
  });
}
// 获取所有回复
export async function getAllReply<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.get<T>({
    url: '/comment/reply/all/' + id,
    params: {
      offset,
      limit
    }
  });
}
// 发布评论
export async function publishComment<T = IResponseType<any>>(
  id: string,
  alias: string,
  content: string
) {
  return await gbRequest.post<T>({
    url: '/comment',
    data: {
      id,
      alias,
      content
    }
  });
}
// 回复评论
export async function replyComment<T = IResponseType<any>>(id: string, content: string) {
  return await gbRequest.post<T>({
    url: '/comment/reply/' + id,
    data: {
      content
    }
  });
}
// 获取所有评论
export async function getUserComment<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number
) {
  return await gbRequest.get<T>({
    url: `/comment/user/${userId}`,
    params: {
      offset,
      limit
    }
  });
}
export async function deleteComment<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/comment/delete/' + id
  });
}
