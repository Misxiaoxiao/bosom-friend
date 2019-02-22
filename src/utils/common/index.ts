/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-02-21 09:41:17
 * @LastEditTime: 2019-02-21 10:09:22
 * @LastEditors: Please set LastEditors
 */
export const dealArray = (arr: any[], num: number): any[] => {
  const newArr: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    const Index: string = (i / num).toString();
    const index: number = parseInt(Index, 10);
    if (newArr[index]) {
      newArr[index].push(arr[i]);
    } else {
      newArr[index] = [];
      newArr[index].push(arr[i]);
    }
  }
  return newArr;
};
