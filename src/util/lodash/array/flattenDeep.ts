/**
 * @description 将array递归为一维数组
 * @param array 需要处理的数组
 * @returns 返回一个新的一维数组
 */
export function _flattenDeep<T>(array: T[]) {
  if (!Array.isArray(array)) return [];
  const res: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // 递归展开成一维数组
      // 使用 `...` 展开运算用于取出对象的所有可遍历属性，拷贝到当前对象之中
      res.push(..._flattenDeep(array[i] as T[]));
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

/**
 * @description 将array递归为一维数组
 * @param array 需要处理的数组
 * @returns 返回一个新的一维数组
 */
export function _flattenDeep2<T>(array: T[]) {
  if (!Array.isArray(array)) return [];
  return array.reduce<T[]>((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(..._flattenDeep2(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}
