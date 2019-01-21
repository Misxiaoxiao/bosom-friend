/*
 * @Description: 全局过滤器模块
 * @Author: Misxiao
 * @Date: 2019-01-21 10:43:43
 * @LastEditTime: 2019-01-21 13:17:36
 * @LastEditors: Please set LastEditors
 */

interface FiltersType {
  [key: string]: any;
}

const Filters: FiltersType = {
  setCoursePrice: (course: any): string => {
    if (course.pay_type === 2) {
      return '￥' + course.price;
    } else {
      return '免费';
    }
  },
  formarMoney: (money: any, num: number = 2): string => {
    return parseFloat(money).toFixed(num);
  },
  changeCount(x: number): string {
    x = x / 10000;
    const y: string = x.toFixed(1) + '万';
    return y;
  },
  formatDuring(mss: any): string {
    if (mss) {
      const minutes: number = parseInt((mss / 1000 / 60).toString(), 10);
      let seconds: string | number = parseInt((mss % (1000 * 60) / 1000).toString(), 10);
      seconds = seconds > 9 ? seconds : '0' + seconds;
      return minutes >= 10 ? minutes.toString() : '0' + minutes + ':' + seconds;
    } else {
      return '00:00';
    }
  },
};

export default Filters;
