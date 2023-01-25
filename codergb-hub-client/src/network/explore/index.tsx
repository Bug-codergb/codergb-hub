import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
export function getExplore<T=IResponseType<any>>(){
  return gbRequest.post<T>({
    url:"/user/all",
    params:{
      isExplore:1
    }
  })
}