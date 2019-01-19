/*
 * @Description: 项目的router模块
 * @Author: Missxiao
 * @Date: 2019-01-18 14:06:11
 * @LastEditTime: 2019-01-19 14:27:29
 * @LastEditors: Please set LastEditors
 */
export const routes = [
  {
    path: '/pc',
    component: () => import('@/views/pc/index.vue'),
  },
];
