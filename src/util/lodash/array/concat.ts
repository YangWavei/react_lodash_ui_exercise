/**
 * @description 创建一个新数组，将array与任何数组 或 值连接在一起。
 * @param array (Array): 被连接的数组。
 * @param [...values] (...*): 连接的值。 函数的剩余参数语法，接收任意数量的参数，这些参数将会
 *        被收集到 `values` 数组中
 * @returns (Array): 返回连接后的新数组。
 */
export function _concat(array: any[], ...values: any[]) {
  // 使用展开运算符 将 array中的所有元素展开
  // ..values.flat(1) `values` 是包含所有传入参数的数组
  // flat(1) 将 `values` 数组展开一层
  // - 如果元素是数组，则将其元素提取出来
  // - 如果元素不是数组，则保持原样
  // return [...array, ...values.flat(1)]
  // contact() 方法用于合并2个数组，不会改变原数组，而是返回一个新数组
  return array.concat(...values)
};
