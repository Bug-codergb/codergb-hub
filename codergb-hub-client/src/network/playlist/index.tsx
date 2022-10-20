import gbRequest from "../index";
import {IResponseType} from "../../types/responseType";
//获取所有播放列表
export function getAllPlaylist<T=IResponseType<any>>(offset:number,limit:number){
  return gbRequest.get<T>({
    url:"/playlist/all",
    params:{
      offset,
      limit
    }
  })
}