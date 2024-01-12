import GBRequest from './request/index';
import { HOST_NAME } from '@/constant/host';
import localCache from '../utils/cache';

const gbRequest = new GBRequest({
  baseURL: `${HOST_NAME}/gb`,
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      if (localCache.getCache('userMsg') && config.headers) {
        const token = localCache.getCache('userMsg').token;
        config.headers.Authorization = token;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});
export default gbRequest;
