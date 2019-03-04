/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-01 15:19:23
 * @LastEditTime: 2019-03-01 16:35:09
 */

// localstorage
const Local = {
  set(key: string, val: string) {
    if (typeof val === typeof {}) val = JSON.stringify(val);
    return localStorage.setItem(key, val);
  },
  get(key: string) {
    let value: any = localStorage.getItem(key);
    if (/^\{.*\}$/.test(value)) value = JSON.parse(value);
    return value;
  },
  del(key: string) {
    return localStorage.removeItem(key);
  },
  clear() {
     return localStorage.clear();
  },
};

// sessionstorage
const Session = {
  set(key: string, val: string) {
    if (typeof val === typeof {}) val = JSON.stringify(val);
    return sessionStorage.setItem(key, val);
  },
  get(key: string) {
    let value: any = sessionStorage.getItem(key);
    if (/^\{.*\}$/.test(value)) value = JSON.parse(value);
    return value;
  },
  del(key: string) {
    return sessionStorage.removeItem(key);
  },
  clear() {
    return sessionStorage.clear();
  },
};

// cookie
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

export default {
  Local,
  Session,
  Cookie,
};
