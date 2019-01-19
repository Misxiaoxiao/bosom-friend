/*
 * @Description: 封装axios
 * @Author: Missxiao
 * @Date: 2019-01-19 11:45:42
 * @LastEditTime: 2019-01-19 14:06:01
 * @LastEditors: Please set LastEditors
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message } from 'element-ui';

const service = axios.create({
  withCredentials: true,
  baseURL: '',
  timeout: 15000, // 请求超时
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  }, (error: any) => {
    Promise.reject(error);
  },
);

// response拦截器
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.data.code !== 200) {
      switch (response.data.code) {
        case 401: // 用户未登录
          break;
        default:
          Message({
            message: response.data.msg || '未知错误',
            type: 'error',
            center: true,
          });
          break;
      }
      return Promise.reject(response);
    } else {
      return response.data;
    }
  },
  (error: any) => {
    if (error.response) {
      const res = error.response.data;
      return Promise.reject(res);
    } else {
      return Promise.reject(error);
    }
  },
);

export default service;
