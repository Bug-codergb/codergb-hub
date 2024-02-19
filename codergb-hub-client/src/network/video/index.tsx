import gbRequest from '../index';
import { type IResponseType } from '../../types/responseType';
export async function uploadVideo<T = IResponseType<any>>(formData: FormData): Promise<T> {
  return await gbRequest.post<T>({
    url: '/video/upload',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    }
  });
}
// 视频合并
export async function mergeVideo<T = IResponseType<any>>(
  path: string,
  hash: string,
  name: string,
  type: string,
  total: number
): Promise<T> {
  return await gbRequest.post<T>({
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
// 创建video
export async function createVideo<T = IResponseType<any>>(
  videoId: string,
  title: string,
  desc: string,
  imgId: string,
  playlistId: string,
  tagIds: string[],
  cateId: string,
  dt: number
) {
  return await gbRequest.post<T>({
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
// 获取所有视频
export async function getAllVideo<T = IResponseType<any>>(
  offset: number,
  limit: number,
  keyword: string
) {
  return await gbRequest.post<T>({
    url: '/video/all',
    params: {
      offset,
      limit
    },
    data: {
      keyword
    }
  });
}
// 获取视频URL
export async function getVideoURL<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: `/video/url/${id}`
  });
}
export async function getVideoDetail<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: `/video/detail/${id}`
  });
}
// 获取用户视频
export async function getUserVideo<T = IResponseType<any>>(
  id: string,
  keyword: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
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
// 获取用户视频
export async function getUserHotVideo<T = IResponseType<any>>(
  id: string,
  keyword: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: `/user/video/hot/${id}`,
    params: {
      offset,
      limit
    },
    data: {
      keyword
    }
  });
}
// 获取订阅用户视频
export async function getSubUserVideo<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number,
  isMonth: number
) {
  return await gbRequest.post<T>({
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
// 获取用户点赞视频
export async function getThumbUserVideo<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/video/thumb/user/' + userId,
    params: {
      offset,
      limit
    }
  });
}
// 获取相关视频
export async function getSimilarVideo<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/video/similar/' + id,
    params: {
      offset,
      limit
    }
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
export async function recordVideo<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/record/' + id
  });
}
export async function getUserRecordVideo<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: '/record/user/' + id
  });
}
export async function getUserRecordThumb<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: '/record/thumb/' + id
  });
}

export async function getUserSub<T = IResponseType<any>>(id: string) {
  return await gbRequest.get<T>({
    url: '/record/sub/' + id
  });
}

export async function addPlayCount<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: 'video/playCount/' + id
  });
}
export async function getCarousel<T = IResponseType<any>>() {
  return await gbRequest.get<T>({
    url: '/video/carousel/all'
  });
}
export async function getCateVideo<T = IResponseType<any>>(
  id: string,
  offset: number,
  limit: number
) {
  return await gbRequest.post<T>({
    url: '/video/cate/' + id,
    params: {
      offset,
      limit
    }
  });
}
export async function deleteVideo<T = IResponseType<any>>(id: string) {
  return await gbRequest.post<T>({
    url: '/video/delete/' + id
  });
}
