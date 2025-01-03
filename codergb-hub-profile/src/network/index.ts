import GBRequest from './request/index';
import { HOST_NAME } from '@/constant/host';
import localCache from '../utils/cache';
import { ElMessage } from 'element-plus';
const gbRequest = new GBRequest({
  baseURL: import.meta.env.VITE_NODE_ENV === 'development' ? `${HOST_NAME}/gb` : HOST_NAME,
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
      ElMessage.closeAll();
      ElMessage({
        type: 'warning',
        message: err.response.data.message,
      });
      return err;
    }
  }
});
export default gbRequest;
