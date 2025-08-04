/** 获取数组 Array 的第一个元素 */
export function _head<T>(array: T[]) {
  if (!Array.isArray(array) || array.length === 0) return undefined;
  return array.at(0);
}
