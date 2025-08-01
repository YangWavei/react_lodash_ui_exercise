/**
 * @description  创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束的部分。
 * predicate 会传入3个参数： (value, index, array)。
 * @returns (Array): 返回array剩余切片。
 */
export function _dropWhile<T>(array: T[], predicate: I_predicate<T>) {
  // 边界值处理，此时切片没有意义
  if (!array || array.length === 0) return [];
  let index = 0;//起始索引
  while (index < array.length && predicate(array[index], index, array)) {
    index++
  }
  return array.slice(index)
};

/* -------------------------------------------------------------------------- */
type I_predicate<T> = (value: T, index: number, arr: T[]) => boolean