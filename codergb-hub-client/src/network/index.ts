import GBRequest from './request/index';
import { HOST_NAME } from '../constant/host';
import localCache from '../utils/cache';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification';
const openNotification = (placement: NotificationPlacement, message: string) => {
  notification.warning({
    message: `提示`,
    description: message,
    placement
  });
};
const gbRequest = new GBRequest({
  baseURL: HOST_NAME,
  timeout: 1000000,
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
      openNotification('bottomLeft', err.response.data.message);
      return err;
    }
  }
});
export default gbRequest;
