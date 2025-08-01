/** 使用 value 值来填充(替换)array,从start位置开始，到end位置结束(但不包含 end 位置)
 *  Note:👩‍🦳这个方法会改变原数组，而不是创建一个新数组
 * @returns 经 `value` 填充修改后的数组
 */
export function _fill<T>(array: T[], value: any, start = 0, end = array.length) {
  // 既然会改变原数组而且又是对数组进行操作，so 首先考虑使用 `fill`
  return array.fill(value, start, end);
};
