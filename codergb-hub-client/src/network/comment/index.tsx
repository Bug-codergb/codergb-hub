import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
//获取所有评论
export function getAllComment<T=IResponseType<any>>(id:string,offset:number,limit:number,alias:string){
  return gbRequest.get<T>({
    url:"/comment/all/"+id,
    params:{
      offset,
      limit,
      alias,
    }
  })
}
//获取所有回复
export function getAllReply<T=IResponseType<any>>(id:string,offset:number,limit:number){
  return gbRequest.get<T>({
    url:"/comment/reply/all/"+id,
    params:{
      offset,
      limit
    }
  })
}
//发布评论
export function publishComment<T=IResponseType<any>>(id:string,alias:string,content:string){
  return gbRequest.post<T>({
    url:"/comment",
    data:{
      id,
      alias,
      content
    }
  })
}
//回复评论
export function replyComment<T=IResponseType<any>>(id:string,content:string){
  return gbRequest.post<T>({
    url:"/comment/reply/"+id,
    data:{
      content
    }
  })
}