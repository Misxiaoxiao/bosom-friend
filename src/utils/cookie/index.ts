/*
 * @Description: cookie模块
 * @Author: Missxiao
 * @Date: 2019-01-18 14:06:11
 * @LastEditTime: 2019-01-19 14:20:00
 * @LastEditors: Please set LastEditors
 */
const Cookie = {
  /**
   * @description: 存储cookie
   * @param {type} key 存入的键
   * @param {type} val 存入的值
   * @param {type} time 存入的时间限制
   * @return: null
   */
  set(key: string, val: string, time: number) {
    const date: any = new Date();
    const expiresDays: number = time;
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    document.cookie = `${key}=${val};expires=${date.toGMTString()}`;
  },
  /**
   * @description: 获取相应的cookie值
   * @param {type} key 查询的键
   * @return: string 查询的cookie的值
   */
  get: (key: string) => {
    const cookies: string = document.cookie.replace(/[]/g, '');
    const arrCookie: string[] = cookies.split(';');
    for (const i of arrCookie) {
      const arr = i.split('=');
      if (arr[0] === key) {
        return arr[1];
      }
    }
    return '';
  },
  /**
   * @description: 删除Cookie
   * @param {type} key 删除的键
   * @return: null
   */
  del: (key: string) => {
    Cookie.set(key, '', -1);
  },
};

export default Cookie;
