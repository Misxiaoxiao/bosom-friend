/*
 * @Description: api模块
 * @Author: Misxiao
 * @Date: 2019-01-23 11:04:56
 * @LastEditTime: 2019-03-06 15:09:56
 * @LastEditors: Please set LastEditors
 */
import Http from '@/utils/http/index';
import * as apiType from './api_type';

const Api = {
  // 手机登录
  LoginCellphone: (params: apiType.LoginPType) => {
    return Http.get(`/login/cellphone?phone=${params.phone}&password=${params.password}`);
  },
  // banner
  banner: () => {
    return Http.get('/banner');
  },
  // 获取精品歌单
  topPlaylistHighquality: (params: apiType.TPHParamsType) => {
    return Http.get(`/top/playlist/highquality?cat=${params.cat}&limit=${params.limit}`);
  },
  // 新歌速递
  topSong: (params: apiType.TSParamsType) => {
    return Http.get(`/top/song?type=${params.type}`);
  },
  // 推荐歌单
  personalized: () => {
    return Http.get('/personalized');
  },
  // 获取每日推荐歌单 (需要登录)
  recommendResource: () => {
    return Http.get('/recommend/resource');
  },
  // 推荐电台
  personalizedDJ: () => {
    return Http.get('/personalized/djprogram');
  },
  // 新碟上架
  topAlbum: (params: apiType.TAParamsType) => {
    return Http.get(`/top/album?offset=${params.offset}&limit=${params.limit}`);
  },
  // 热门歌手
  topArtists: (params: apiType.TAParamsType) => {
    return Http.get(`/top/artists?offset=${params.offset}&limit=${params.limit}`);
  },
  // 最新mv
  mvFirst: (params: apiType.MVFParamsType) => {
    return Http.get(`/mv/first?limit=${params.limit}`);
  },
  // 推荐mv
  mvPersonalized: () => {
    return Http.get('/personalized/mv');
  },
  // mv排行
  mvTop: (params: apiType.MVFParamsType) => {
    return Http.get(`top/mv?limit=${params.limit}`);
  },
};

export default Api;
