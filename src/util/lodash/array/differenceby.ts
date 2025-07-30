/**
 * @description 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * 使用迭代函数来比较元素
 * @param array 要检查的数组
 * @param values 要排除的值所在的数组
 * @param iteratee 调用每个元素的迭代函数
 * @returns 返回过滤后的数组
 */
export function _differenceBy<T>(
  array: T[],
  values: T[],
  iteratee: (value: T) => any | string) {
  // 目前仅考虑 `iteratee` 为字符串或函数的情况
  // 创建一个迭代器函数,这个迭代器函数会分别遍历
  // array和values数组
  // 迭代器函数
  const iterateeFunc = typeof iteratee === 'string'
    ? (item: any) => item[iteratee]
    : iteratee
  // 遍历被查找数组，并使用set集合去重，优化查询过程，应用迭代器函数
  const mappedValuesSet = new Set(values.map(iterateeFunc))

  // 遍历原始的 array数组，并对每个元素应用 迭代器函数，
  // 检查处理后的值是否存在 `mappedValuesSet` 中
  // 最后返回原始数组，而不是处理后的值
  return array.filter(item => !mappedValuesSet.has(iterateeFunc(item)))
}