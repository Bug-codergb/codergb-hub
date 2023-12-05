import gbRequest from "../index";
import { IResponseType } from "../../types/responseType";
export function sub<T = IResponseType<any>>(upId: string) {
  return gbRequest.post<T>({
    url: "/sub/",
    data: {
      upId,
    },
  });
}
export function cancelSub<T = IResponseType<any>>(upId: string) {
  return gbRequest.post<T>({
    url: "/sub/cancel",
    data: {
      upId,
    },
  });
}
//获取用户订阅
export function getUserSub<T = IResponseType<any>>(
  userId: string,
  offset: number,
  limit: number
) {
  return gbRequest.post<T>({
    url: "/sub/user/" + userId,
    data: {
      offset,
      limit,
    },
  });
}
//获取订阅数
export function getUserSubCount<T = IResponseType<any>>(id: string) {
  return gbRequest.get<T>({
    url: "/sub/count/" + id,
  });
}
