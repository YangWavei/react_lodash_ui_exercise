/**
 * @description 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * 使用迭代函数来比较元素
 * @param array 要检查的数组
 * @param values 要排除的值所在的数组
 * @param iteratee 调用每个元素的迭代函数
 * @returns 返回过滤后的数组
 */
export const _differenceBy = <T>(
  array: T[],
  values: T[],
  iteratee: ((value: T) => any) | string
): T[] => {
  // 处理 iteratee 为字符串的情况（属性名）
  const iterateeFunc = typeof iteratee === 'string'
    ? (item: any) => item[iteratee]
    : iteratee as (value: T) => any;

  // 创建一个已处理值的 Set 以提高查找效率
  const mappedValuesSet = new Set(values.map(iterateeFunc));

  // 过滤出在 values 中找不到映射值的元素
  return array.filter(item => !mappedValuesSet.has(iterateeFunc(item)));
}
