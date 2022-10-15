import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
//上传频道头像
export function uploadAvatar<T=IResponseType<any>>(formData:FormData,getProgress:(progress:any)=>void):Promise<T>{
  return gbRequest.post<T>({
    url:"/channel/avatar/upload",
    data:formData,
    headers:{
      'Content-type': 'multipart/form-data',
    },
    onUploadProgress(progressEvent:any){
      getProgress(progressEvent)
    }
  })
}