import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
export function createMoment<T=IResponseType<any>>(title:string,content:string,vid:string,userId:string,cId:string){
  return gbRequest.post<T>({
    url:"/moment",
    data:{
      "title":title,
      "content":content,
      "vid":vid,
      "cId":cId,
      "userId":userId
    }
  })
}
export function getChannelMoment<T=IResponseType<any>>(id:string,offset:number,limit:number){
  return gbRequest.post<T>({
    url:"/moment/channel/"+id,
    params:{
      offset,
      limit
    }
  })
}
export function getMomentDetail<T=IResponseType<any>>(id:string){
  return gbRequest.post<T>({
    url:"/moment/"+id
  })
}