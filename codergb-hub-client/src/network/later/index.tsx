import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";

export function getUserLater<T=IResponseType<any>>(userId:string,offset:number,limit:number):Promise<T>{
  return gbRequest.get<T>({
    url:"/later/user/"+userId,
    params:{
      offset,
      limit
    }
  })
}
//添加至稍后观看
export function addLater<T=IResponseType<any>>(id:string){
  return gbRequest.post<T>({
    url:"/later/"+id
  })
}