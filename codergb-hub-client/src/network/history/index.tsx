import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
//添加历史记录
export function addHistory<T=IResponseType<any>>(id:string){
  return gbRequest.post({
    url:"/history/"+id,
    data:{}
  })
}
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
//清除所有历史记录
export function deleteAllHistory<T=IResponseType<any>>(){
  return gbRequest.post<T>({
    url:"/history/delete/all"
  })
}