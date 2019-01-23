/*
 * @Description: api模块
 * @Author: Misxiao
 * @Date: 2019-01-23 11:04:56
 * @LastEditTime: 2019-01-23 11:28:17
 * @LastEditors: Please set LastEditors
 */
import Http from '@/utils/http/index';
import * as apiType from './api_type';

const Api = {
  // banner
  banner: () => {
    return Http.get('/banner');
  },
  // 获取精品歌单
  topPlaylistHighquality: (params: apiType.TPHParamsType) => {
    return Http.get(`/top/playlist/highquality?cat=${params.cat}&limit=${params.limit}`);
  },
};

export default Api;
