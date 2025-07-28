/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 */
export const _chunk = (array: (number | string)[], size = 1) => {
  //分块大小为0或者负数没有意义
  if (size <= 0) return []
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
};

/**
 * 假设 array = [1,2,3,4,5,6,7]，size = 3：
    Math.ceil(7/3) = 3，所以创建长度为 3 的数组
    index = 0: array.slice(0, 3) → [1,2,3]
    index = 1: array.slice(3, 6) → [4,5,6]
    index = 2: array.slice(6, 9) → [7]
    最终结果：[[1,2,3], [4,5,6], [7]]
    这种方法的优势是函数式编程风格，代码更简洁，不需要显式的循环。
 * @param array 
 * @param size 
 * @returns 
 */
export const _chunk2 = (array: (number | string)[], size = 1) => {
  if (size <= 0) return []
  return Array.from(
    // 创建一个指定长度的对象，作为 `Array.from()` 的第一个参数
    // 这个对象没有实际数组元素，只是指定了要创建的数组长度
    // 使用ceil向上取整，保证了即使最后一块不完整也会被包含
    { length: Math.ceil(array.length / size) },
    // `_` 代表当前元素， `index` 是当前元素的索引
    // 对于每个 `index`，从原数组中进行切片
    (_, index) => array.slice(index * size, (index + 1) * size)
  )
};

export const _chunk3 = (array: (number | string)[], size = 1) => {
  // 区块长度小于等于0没有意义
  if (size <= 0) return []
  let index = 0;
  const res = []
  while (index < array.length) {
    res.push(array.slice(index, index + size))
    index += size
  }
  return res;
};

export const _chunk4 = (array: (string | number)[], size = 1) => {
  if (size <= 0) return []
  return array.reduce((res, item, index) => {
    const chunkIndex = Math.floor(index / size)
    if (!res[chunkIndex]) res[chunkIndex] = []
    res[chunkIndex].push(item)
    // 返回累积器，供下一次使用
    return res
  }, [] as (string | number)[][])
};
