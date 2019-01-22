/*
 * @Description: 项目的router模块
 * @Author: Missxiao
 * @Date: 2019-01-18 14:06:11
 * @LastEditTime: 2019-01-22 10:06:01
 * @LastEditors: Please set LastEditors
 */
export const routes = [
  {
    path: '/pc',
    component: () => import('@/views/pc/index.vue'),
    children: [
      {
        path: 'featured',
        name: 'featured',
        component: () => import('@/views/pc/featured/index.vue'),
        meta: {
          title: '精选',
        },
      },
    ],
  },
];
