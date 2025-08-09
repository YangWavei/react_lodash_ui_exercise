/**
 * Sort an array without modifying it and return
 * the newly sorted value. Allows for a string
 * sorting value.
 * @param array
 * @param getter
 * @param dir
 * @returns
 */
export function _alphabetical<T>(
  array: readonly T[],
  getter: (item: T) => string,
  dir: 'desc' | 'asc' = 'asc'
) {
  // 构造比较函数
  // ${getter(a)} is referenceStr 
  // getter(b) is compareStr
  // A negative number if referenceStr occurs before compareString; 
  // positive if the referenceStr occurs after compareString; 
  // 0 if they are equivalent.
  const asc = (a: T, b: T) => `${getter(a)}`.localeCompare(getter(b));
  const desc = (a: T, b: T) => `${getter(b)}`.localeCompare(getter(a));

  return array.slice().sort(dir === 'desc' ? desc : asc);
}

/* -------------------------------------------------------------------------- */

/**
 * Reduce a list of items down to one item.
 * Given an array of items return the final item that wins the comparison condition.
 * Useful for more complicated min/max.
 * @param array 
 * @returns 
 */
export function _boil<T>(array: readonly T[], compareFunc: (a: T, b: T) => T): T | null {
  // Null 判断运算符 `??` 只有在运算符左侧的值为 null 或者 undefined 时，才会返回右侧的值
  if (!array || (array.length ?? 0) === 0) return null;
  // reduce 方法 对数组中的每个元素执行 compareFunc 函数，从左到右将函数应用到每个元素，
  // 最终将数组简化为单个值。比较函数决定在每一步中保留哪个元素，最终返回经过一系列比较后胜出的
  // 元素。
  // reduce() 方法对数组中的每个元素按顺序执行一个提供的 `reducer` 函数,每次运行reducer会将
  // 先前计算的结果作为参数传入，最后将结果汇总为单个返回值
  return array.reduce(compareFunc);
}
