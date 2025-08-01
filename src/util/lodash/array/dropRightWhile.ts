/** 创建一个切片数组，去除 array 中从 predicate 返回假值开始到尾部的部分。
 * predicate 会传入3个参数(value,index,array)
 * @returns Array 返回array的剩余切片 
 */
export function _dropRightWhile<T>(array: T[], predicate: I_predicate<T>) {
  // 边界值处理
  if (!array || array.length <= 0) return [];
  // 最后一个元素的索引
  let index = array.length - 1;
  // 对数组从右往左进行遍历，找到第一个使得 predicate函数返回false的数组索引
  while (index >= 0 && predicate(array[index], index, array)) {
    index--
  }
  // 返回array的剩余切片
  return array.slice(0, index + 1)
};


/* -------------------------------------------------------------------------- */
type I_predicate<T> = (value: T, index: number, arr: T[]) => boolean;