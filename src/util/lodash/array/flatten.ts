/**
 * 减少一级array嵌套深度
 * @param array  (Array): 需要减少嵌套层级的数组。
 * @returns (Array): 返回减少嵌套层级后的新数组。
 */
export const _flatten = <T>(array: T[]) => {
  // 这个是最简单的方式
  return array.flat();
};

/**
 * 减少一级array嵌套深度（递归实现）
 * @param array  (Array): 需要减少嵌套层级的数组。
 * @returns (Array): 返回减少嵌套层级后的新数组。
 */
export const _flatten2 = <T>(array: T[]) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      //如果数组中的元素是数组，则将元素逐个添加到结果数组中
      result.push(...(array[i] as T[]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

/**
 * 减少一级array嵌套深度（递归实现）
 * @param array  (Array): 需要减少嵌套层级的数组。
 * @returns (Array): 返回减少嵌套层级后的新数组。
 */
export const _flatten3 = <T>(array: T[]) => {
  return array.reduce<T[]>((acc, cur) => {
    Array.isArray(cur) ? acc.push(...cur) : acc.push(cur);
    return acc;
  }, []);
};
