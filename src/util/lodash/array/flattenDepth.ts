/**
 * 根据 `depth` 递归减少array的嵌套层级
 * @param array array (Array): 需要减少嵌套层级的数组。
 * @param depth [depth=1] (number):最多减少的嵌套层级数。
 * @returns (Array): 返回减少嵌套层级后的新数组。
 */
export function _flattenDepth<T>(array: T[], depth = 1) {
  // 最简单的方法
  return array.flat(depth);
}

/**
 * 根据 `depth` 递归减少array的嵌套层级
 * @param array array (Array): 需要减少嵌套层级的数组。
 * @param depth [depth=1] (number):最多减少的嵌套层级数。
 * @returns (Array): 返回减少嵌套层级后的新数组。
 */
export function _flattenDepth2<T>(array: T[], depth = 1) {
  // important 如果 depth=0 则不进行扁平化
  if (depth <= 0 || !Array.isArray(array)) return array.slice(0);

  const res: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // 将当前层级的嵌套数组展开一层，并递归处理剩余深度
      res.push(..._flattenDepth2(array[i] as T[], depth - 1));
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

/**
 * 根据 `depth` 递归减少array的嵌套层级
 * @param array array (Array): 需要减少嵌套层级的数组。
 * @param depth [depth=1] (number):最多减少的嵌套层级数。
 * @returns (Array): 返回减少嵌套层级后的新数组。
 */
export function _flattenDepth3<T>(array: T[], depth = 1) {
  // important 如果 depth=0 则不进行扁平化
  if (depth <= 0 || !Array.isArray(array)) return array.slice(0);

  return array.reduce<T[]>((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(..._flattenDepth3(cur, depth - 1));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}
