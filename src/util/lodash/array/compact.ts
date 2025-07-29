/**
 * @description 创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”
 * @param array  待处理的数组
 * @returns (Array): 返回过滤掉假值的新数组。
 */
export const _compact = (array: any[]) => {
  // `!!` 的作用是返回元素对应的 boolean 值
  return array.filter(el => !!el)
};

/**
 * @description 创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”
 * @param array  待处理的数组
 * @returns (Array): 返回过滤掉假值的新数组。
 */
export const _compact2 = (array: any[]) => {
  // `!!` 的作用是返回元素对应的 boolean 值
  return array.filter(el => Boolean(el))
};

/**
 * @description 创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”
 * @param array  待处理的数组
 * @returns (Array): 返回过滤掉假值的新数组。
 */
export const _compact3 = (array: any[]) => {
  //利用了 filter 函数会本身会将回调函数返回值转为 boolean 类型的特性
  return array.filter(el => el)
};
