import gbRequest from '../index';
import { IResponseType } from '@/types/responseType';
export function uploadVideo<T = IResponseType<any>>(formData: FormData): Promise<T> {
  return gbRequest.post<T>({
    url: '/video/upload',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    }
  });
}
//视频合并
export function mergeVideo<T = IResponseType<any>>(
  path: string,
  hash: string,
  name: string,
  type: string,
  total: number
): Promise<T> {
  return gbRequest.post<T>({
    url: '/video/merge',
    data: {
      dest: path,
      hash,
      originalname: name,
      type,
      total
    }
  });
}
//创建video
export function createVideo<T = IResponseType<any>>(
  videoId: string,
  title: string,
  desc: string,
  imgId: string,
  playlistId: string,
  tagIds: string[],
  cateId: string,
  dt: number
) {
  return gbRequest.post<T>({
    url: '/video/create',
    data: {
      videoId,
      title,
      desc,
      imgId,
      playlistId,
      tagIds,
      cateId,
      dt
    }
  });
}

//更新video
export function updateVideo<T = IResponseType<any>>(
  id: string,
  videoId: string,
  title: string,
  desc: string,
  imgId: string,
  playlistId: string,
  tagIds: string[],
  cateId: string,
  dt: number
) {
  return gbRequest.post<T>({
    url: '/video/update',
    data: {
      id,
      videoId,
      title,
      desc,
      imgId,
      playlistId,
      tagIds,
      cateId,
      dt
    }
  });
}

//获取所有视频
export function getAllVideo<T = IResponseType<any>>(offset: number, limit: number) {
  return gbRequest.post<T>({
    url: '/video/all',
    params: {
      offset,
      limit
    }
  });
}
//获取视频URL
export function getVideoURL<T = IResponseType<any>>(id: string) {
  return gbRequest.get<T>({
    url: `/video/url/${id}`
  });
}
export function getVideoDetail<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: `/video/detail/${id}`
  });
}
//获取用户视频
export function getUserVideo<T = IResponseType<any>>(
  id: string,
  keyword: string,
  offset: number,
  limit: number
) {
  return gbRequest.post<T>({
    url: `/user/video/${id}`,
    params: {
      offset,
      limit
    },
    data: {
      keyword
    }
  });
}
//获取订阅用户视频
export function getSubUserVideo<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number,
  isMonth: number
) {
  return gbRequest.post<T>({
    url: `/video/sub/user/${userId}`,
    params: {
      offset,
      limit
    },
    data: {
      isMonth
    }
  });
}
//获取用户点赞视频
export function getThumbUserVideo<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number
) {
  return gbRequest.post<T>({
    url: '/video/thumb/user/' + userId,
    params: {
      offset,
      limit
    }
  });
}
//获取相关视频
export function getSimilarVideo<T = IResponseType<any>>(id: string, offset: number, limit: number) {
  return gbRequest.post<T>({
    url: '/video/similar/' + id,
    params: {
      offset,
      limit
    }
  });
}
//获取视频源文件
export function getVideoSource<T = IResponseType<any>>(
  offset: number,
  limit: number,
  keyword: string,
  isNull: number | undefined
) {
  return gbRequest.post<T>({
    url: '/video/source',
    params: {
      offset,
      limit,
      keyword,
      isNull
    }
  });
}
//删除视频源文件
export function deleteVideoSource<T = IResponseType<any>>(name: string) {
  return gbRequest.post<T>({
    url: `/video/source/delete/${name}`
  });
}
//删除视频
export function deleteVideo<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/video/delete/' + id
  });
}

//获取分类下视频
export function getCateVideo<T = IResponseType<any>>(id: string, offset: number, limit: number) {
  return gbRequest.get<T>({
    url: '/video/cate/' + id,
    params: {
      offset,
      limit
    }
  });
}
export function getVideoChunks<T = IResponseType<any>>(id: string) {
  return gbRequest.get<T>({
    url: '/video/chunk/' + id
  });
}
export async function getCollectionVideo<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/video/collection/' + id,
    params: {
      offset,
      limit
    }
  });
}
export function addCarousel<T = IResponseType<any>>(
  title: string,
  desc: string,
  fileId: string,
  videoId: string
) {
  return gbRequest.post<T>({
    url: '/video/carousel',
    data: {
      title,
      description: desc,
      fileId,
      videoId
    }
  });
}
export function deleteCarousel<T = IResponseType<any>>(id: string) {
  return gbRequest.post<T>({
    url: '/video/carousel/' + id
  });
}
