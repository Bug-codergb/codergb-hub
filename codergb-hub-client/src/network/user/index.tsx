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
//更换用户头像
export function updateAvatar<T=IResponseType<any>>(id:string,formData:FormData,getProgress:(e:any)=>void){
  return gbRequest.post<T>({
    url:"/user/avatar/update/"+id,
    data:formData,
    headers:{
      'Content-type': 'multipart/form-data',
    },
    onUploadProgress:getProgress
  })
}
//获取userMsg
export function getUserMsg<T=IResponseType<any>>(userId:string){
  return gbRequest.post<T>({
    url:`/user/msg/${userId}`
  })
}