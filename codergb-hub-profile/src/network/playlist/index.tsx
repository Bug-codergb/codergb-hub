import gbRequest from '../index';
import { IResponseType } from '../../types/responseType';
//获取所有播放列表
export function getAllPlaylist<T = IResponseType<any>>(offset: number, limit: number) {
  return gbRequest.post<T>({
    url: '/playlist/all',
    params: {
      offset,
      limit
    }
  });
}
//获取用户播放列表
export function getUserPlaylist<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number
): Promise<T> {
  return gbRequest.get<T>({
    url: '/playlist/user/' + userId,
    params: {
      offset,
      limit
    }
  });
}
//创建播放列表
export function createPlaylist<T = IResponseType<any>>(
  name: string,
  description: string,
  isPublic: number
) {
  return gbRequest.post<T>({
    url: '/playlist',
    data: {
      name,
      description,
      isPublic
    }
  });
}
//将视频添加到播放列表
export function addVideoPlaylist<T = IResponseType<any>>(vId: string, pId: string) {
  return gbRequest.post<T>({
    url: '/playlist/video',
    data: {
      vId,
      pId
    }
  });
}
//获取播放列表详情
export function getPlaylistDetail<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/playlist/' + id
  });
}
export function getPlaylistVideo<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return gbRequest.post<T>({
    url: '/playlist/video/' + id,
    params: {
      offset,
      limit
    }
  });
}
export function updatePlaylist<T = IResponseType<any>>(
  id: string,
  name: string,
  isPublic: number,
  description: string,
  userId: string
) {
  return gbRequest.post<T>({
    url: '/playlist/update/' + id,
    data: {
      name,
      isPublic,
      description,
      userId
    }
  });
}
export function deletePlaylist<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
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
export async function getSubPlaylist<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: `/playlist/user/sub/${id}`
  });
}
