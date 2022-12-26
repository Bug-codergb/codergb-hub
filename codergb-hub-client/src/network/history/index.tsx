import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
export function getUserHistory<T=IResponseType<any>>(userId:string,offset:number,limit:number,keyword:string){
  return gbRequest.post<T>({
    url:"/history/user/"+userId,
    params:{
      offset,
      limit,
      keyword
    }
  })
}