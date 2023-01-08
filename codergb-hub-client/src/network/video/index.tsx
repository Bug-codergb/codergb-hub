import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
export function uploadVideo<T=IResponseType<any>>(formData:FormData):Promise<T>{
  return gbRequest.post<T>({
    url:"/video/upload",
    data:formData,
    headers:{
      'Content-type': 'multipart/form-data',
    }
  })
}
//视频合并
export function mergeVideo<T=IResponseType<any>>(path:string,hash:string,name:string,type:string,total:number):Promise<T>{
  return gbRequest.post<T>({
    url:"/video/merge",
    data:{
      dest:path,
      hash,
      originalname:name,
      type,
      total
    },
  })
}
//创建video
export function createVideo<T=IResponseType<any>>(
    videoId:string,
    title:string,
    desc:string,
    imgId:string,
    playlistId:string,
    tagIds:string[],
    cateId:string,
    dt:number
){
  return gbRequest.post<T>({
    url:"/video/create",
    data:{
      videoId,
      title,
      desc,
      imgId,
      playlistId,
      tagIds,
      cateId,
      dt
    }
  })
}
//获取所有视频
export function getAllVideo<T=IResponseType<any>>(offset:number,limit:number){
  return gbRequest.get<T>({
    url:"/video/all",
    params:{
      offset,
      limit
    }
  })
}
//获取视频URL
export function getVideoURL<T=IResponseType<any>>(id:string){
  return gbRequest.get<T>({
    url:`/video/url/${id}`,
  })
}
export function getVideoDetail<T=IResponseType<any>>(id:string){
  return gbRequest.post<T>({
    url:`/video/detail/${id}`,
  })
}
//获取用户视频
export function getUserVideo<T=IResponseType<any>>(id:string,keyword:string,offset:number,limit:number){
  return gbRequest.post<T>({
    url:`/user/video/${id}`,
    params:{
      offset,
      limit,
    },
    data:{
      keyword
    }
  })
}
//获取订阅用户视频
export function getSubUserVideo<T=IResponseType<any>>(userId:string,offset:number,limit:number,isMonth:number){
  return gbRequest.post<T>({
    url:`/video/sub/user/${userId}`,
    params:{
      offset,
      limit
    },
    data:{
      isMonth
    }
  })
}
//获取用户点赞视频
export function getThumbUserVideo<T=IResponseType<any>>(userId:string,offset:number,limit:number){
  return gbRequest.post<T>({
    url:"/video/thumb/user/"+userId,
    params:{
      offset,
      limit
    }
  })
}