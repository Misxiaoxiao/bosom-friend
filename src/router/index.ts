/*
 * @Description: 项目的router模块
 * @Author: Missxiao
 * @Date: 2019-01-18 14:06:11
 * @LastEditTime: 2019-03-05 10:57:53
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
      {
        path: 'MV',
        name: 'MV',
        component: () => import('@/views/pc/MV/index.vue'),
        meta: {
          title: 'MV',
        },
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import('@/views/pc/radio/index.vue'),
        meta: {
          title: '电台',
        },
      },
      {
        path: 'playlist/:id',
        name: 'playlist',
        meta: {
          title: '歌单详情',
        },
      },
    ],
  },
];
