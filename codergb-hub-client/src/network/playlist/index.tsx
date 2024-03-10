import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
// 获取所有播放列表
export async function getAllPlaylist<T = IResponseType<any>>(offset: number, limit: number) {
  return await gbRequest.post<T>({
    url: '/playlist/all',
    params: {
      offset,
      limit
    }
  });
}
// 获取用户播放列表
export async function getUserPlaylist<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number,
  isPublic?: number
): Promise<T> {
  return await gbRequest.get<T>({
    url: '/playlist/user/' + userId,
    params: {
      offset,
      limit,
      isPublic
    }
  });
}
// 创建播放列表
export async function createPlaylist<T = IResponseType<any>>(
  name: string,
  description: string,
  isPublic: number
) {
  return await gbRequest.post<T>({
    url: '/playlist',
    data: {
      name,
      description,
      isPublic
    }
  });
}
// 将视频添加到播放列表
export async function addVideoPlaylist<T = IResponseType<any>>(vId: string, pId: string) {
  return await gbRequest.post<T>({
    url: '/playlist/video',
    data: {
      vId,
      pId
    }
  });
}
// 获取播放列表详情
export async function getPlaylistDetail<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/playlist/' + id
  });
}
export async function getPlaylistVideo<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/playlist/video/' + id,
    params: {
      offset,
      limit
    }
  });
}
export async function subUserPlaylist<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/playlist/sub/' + id
  });
}
export async function getSubPlaylist<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: `/playlist/user/sub/${id}`
  });
}

export async function deletePlaylist<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: `/playlist/delete/${id}`
  });
}
export async function deletePlaylistVideo<T = IResponseType<any>>(vid: string, pid: string) {
  return await gbRequest.post<T>({
    url: '/playlist/del/video',
    data: {
      vid,
      pid
    }
  });
}
// 取消收藏播放列表
export async function cancelSubPlaylist<T = IResponseType<any>>(userId: string, pId: string) {
  return await gbRequest.post<T>({
    url: `/playlist/cancel/sub`,
    data: {
      userId,
      pId
    }
  });
}
