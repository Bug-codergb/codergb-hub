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
    cateId:string
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
      cateId
    }
  })
}