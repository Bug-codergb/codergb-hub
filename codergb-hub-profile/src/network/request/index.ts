import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface GBRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}
interface GBRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GBRequestInterceptors<T>;
}
class GBRequest {
  instance: AxiosInstance;
  interceptor?: GBRequestInterceptors;
  constructor(config: GBRequestConfig) {
    this.instance = axios.create(config);
    this.interceptor = config.interceptors;
    //请求拦截器
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    );
    //响应拦截器
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    );

    //实例拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        console.log(err);
        return err;
      }
    );
  }
  request<T>(config: GBRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T>(config: GBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'get' });
  }
  post<T>(config: GBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'post' });
  }
}
export default GBRequest;
