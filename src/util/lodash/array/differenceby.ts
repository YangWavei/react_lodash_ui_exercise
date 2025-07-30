/**
 * @description 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * 使用迭代函数来比较元素
 * @param array 要检查的数组
 * @param values 要排除的值所在的数组
 * @param iteratee 调用每个元素的迭代函数
 * @returns 返回过滤后的数组
 */
export function _differenceBy<T>(array: T[], ...values: any[]) {
  // 获取最后一个元素
  const lastArg = values[values.length - 1]
  // 判断最后一个元素是否为 iteratee (函数或者字符串)
  const iteratee = (typeof lastArg === 'function' || typeof lastArg === 'string') ? lastArg : undefined
  // 确定实际的 values 数组
  const actualValues = iteratee ? values.slice(0, values.length - 1) : values

  // 创建迭代器函数
  const iterateeFunc = typeof iteratee === 'string'
    ? (item: any) => item[iteratee]
    : (iteratee || ((item: any) => item))//恒等函数

  // 将所有的values数组，合并成一个数组
  const flattenedValues = actualValues.flat()
  // 创建一个Set 存储 values 经过 iteratee 处理后的结果，提高查找效率
  const mappedValuesSet = new Set(flattenedValues.map(iterateeFunc))
  // 过滤原数组，返回经过 iteratee 处理后不在 `mappedValuesSet` 中的元素
  return array.filter(item => !mappedValuesSet.has(iterateeFunc(item)))
}