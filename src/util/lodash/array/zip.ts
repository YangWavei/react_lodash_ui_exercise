/**
 * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
 * @param array
 * @returns (Array): 返回分组元素的新数组。
 */
export function _zip(...array: unknown[][]) {
  // 使用...运算符接受任意数量的数组
  // 计算数组最大长度
  // 通过 array.map((arr) => arr.length) 获取每个子数组的长度
  const maxLength = Math.max(0, ...array.map((arr) => arr.length));

  // 创建长度为 maxLength 的新数组
  // 第二个参数是映射函数，index表示当前索引
  // 每个索引位置，通过 array.map((el) => el[index])
  // 提取所有子数组在该位置的元素并合并
  return Array.from({ length: maxLength }, (_, index) => array.map((el) => el[index]));
}

/* -------------------------------------------------------------------------- */
/**
 * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
 * @param array
 * @returns (Array): 返回分组元素的新数组。
 */
export function _zip2(...array: unknown[][]) {
  // 计算数组最大长度
  const maxLength = Math.max(0, ...array.map((arr) => arr.length));
  const result = Array.from({ length: maxLength }, () => [] as unknown[]);
  for (let i = 0; i < maxLength; i++) {
    for (const item of array) {
      result[i].push(item[i]);
    }
  }
  return result;
}
