/**
 * @description 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
 * @param array 要检查的数组
 * @param values 要排除的值所在的数组
 * @returns 返回过滤后的数组
 */
export const _difference = (array: number[], values: number[]) => {
  const filterArray: number[] = []
  for (let i = 0; i < array.length; i++) {
    let flag = false
    for (let j = 0; j < values.length; j++) {
      if (array[i] === values[j]) {
        // array中存在于values数组中相同的元素
        flag = true
        break
      }
    }
    // 若不存在，则将array数组中遍历到的当前元素添加到新数组
    if (!flag) filterArray.push(array[i])
  }
  return filterArray
};

/**
 * @description 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
 * @param array 要检查的数组
 * @param values 要排除的值所在的数组
 * @returns 返回过滤后的数组
 */
export const _difference2 = (array: number[], values: number[]) => {
  //返回 另一个数组中不包含当前元素的的当前元素
  return array.filter(item => !values.includes(item))
};

export const _difference3 = (array: number[], ...arr: number[][]) => {
  //  将所有要排除的数组合并成一个数组
  const flatArr = arr.flat()
  /*// Array.flat() 创建一个新数组，并根据指定深度,递归将所有的子数组元素
    // 拼接到新数组中
    const arr = [0, 1, 2, [3, 4, 2], ['as', 'cli', '12']]
    const flatArr = arr.flat()
    console.log("🚀 ~ App ~ flatArr:", flatArr)
    // [0, 1, 2, 3, 4, 2, "as", "cli", "12"] */
  console.log(flatArr);
  // 使用 Set 提高查找效率
  const excludeSet = new Set(flatArr)
  // 过滤出不在排除集合中的元素
  return array.filter(item => !excludeSet.has(item))
};
