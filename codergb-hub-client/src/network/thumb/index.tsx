import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
//点赞
export function thumb<T=IResponseType<any>>(id:string,alias:string){
  return gbRequest.post<T>({
    url:"/thumb",
    data:{
      id,
      alias
    }
  })
}
//取消点赞
export function cancelThumb<T=IResponseType<any>>(id:string,alias:string){
  return gbRequest.post<T>({
    url:"/thumb/cancel",
    data:{
      id,
      alias
    }
  })
}
//踩
export function tread<T=IResponseType<any>>(id:string,alias:string){
  return gbRequest.post<T>({
    url:"/tread",
    data:{
      id,
      alias
    }
  })
}
export function cancelTread<T=IResponseType<any>>(id:string,alias:string){
  return gbRequest.post<T>({
    url:"/tread/cancel",
    data:{
      id,
      alias
    }
  })
}