import { IResponseType } from '@/types/responseType';
import gbRequest from '../index';
export function getDataAnalysis<T = IResponseType<any>>() {
  return gbRequest.get<T>({
    url: '/dashboard/data-analysis'
  });
}
export function getUserWorks<T = IResponseType<any>>() {
  return gbRequest.get<T>({
    url: '/dashboard/user-works'
  });
}
