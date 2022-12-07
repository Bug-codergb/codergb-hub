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