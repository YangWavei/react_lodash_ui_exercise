/**
 * 创建一个切片数组，去除 array 中从 `predicate` 返回假值开始到尾部的部分。
 * predicate会传入3个参数，(value,index,array)
 * @param array 
 * @param predicate 
 */
export const _dropRightWhile = <T>(array: T[], predicate: I_predicate<T>) => {
  // 
  if (!array || array.length === 0) return [];
  // The index of the last element in the array.
  let index = array.length - 1;
  // 从右往左遍历，找到使得数组中元素调用 `predicate` 返回false的索引
  while (index >= 0 && predicate(array[index], index, array)) {
    index--
  }
  return array.slice(0, index)
};


type I_predicate<T> = (value: T, index: number, arr: T[]) => boolean

// 在外面调用时，我传入的实际参数是 o => !o.active
// 实际上是 (o:{user:string;active:boolean})=>boolean
// 这个函数类型与期望的 predicate 类型是兼容的
// because 
// TS对函数参数数量具有一定的灵活性
// 1.函数可以接收比声明时更少的参数
// 2.多余的参数会被省略,不会导致错误error