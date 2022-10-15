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