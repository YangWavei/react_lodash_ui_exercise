/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 */
export const _chunk = <T>(array: T[], size = 1) => {
  if (size <= 0) return []
  const result = []
  for (let i = 0; i < array.length; i += size) {
    // Add the segmented arrays together to from a two-dimensional array.
    result.push(array.slice(i, i + size))
  }
  return result;
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
export const _chunk2 = <T>(array: T[], size = 1) => {
  if (size <= 0) return []
  return Array.from(
    { length: Math.ceil(array.length / size) }, //Ensure the length of the array.
    // Each element in the array.
    (_, index) => array.slice(index, (index + 1) * size)
  )
};

export const _chunk3 = <T>(array: T[], size = 1) => {
  if (size <= 0) return []
  let index = 0
  const tempArr = []
  while (index < array.length) {
    tempArr.push(array.slice(index, index + size))
    index += size
  }
  return tempArr;
};

export const _chunk4 = <T>(array: T[], size = 1) => {
  if (size <= 0) return []
  return array.reduce((res, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!res[chunkIndex]) res[chunkIndex] = []
    res[chunkIndex].push(item)
    return res;
  }, [] as T[][])
};
