import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
export function userUploadAvatar<T=IResponseType<any>>(formData:FormData,getProgress:(e:any)=>void):Promise<T>{
  return gbRequest.post<T>({
    url:"/user/avatar/upload",
    data:formData,
    headers:{
      'Content-type': 'multipart/form-data',
    },
    onUploadProgress:getProgress
  })
}