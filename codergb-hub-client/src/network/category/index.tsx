import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
export function getAllCate<T=IResponseType<any>>(offset:number,limit:number){
  return gbRequest.get<T>({
    url:"/cate/all",
    params:{
      offset,
      limit
    }
  })
}