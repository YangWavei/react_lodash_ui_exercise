/**
 * 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
  注意： 和_.without 方法不同，这个方法会改变数组。使用_.remove 从一个数组中移除元素。
 * @param array array (Array): 要修改的数组。
 * @param resValues (...*): 要删除的值。
 */
/* export function _pull<T>(array: T[], ...resValues: T[]) {
  for (let i = 0; i < array.length; i++) {
    // 这里是错误的写法，在循环的逻辑中使用的是splice方法，会改变原数组
    // 导致在遍历时array的索引发生了变化
    for (let j = 0; j < resValues.length; j++) {
      if (array[i] === resValues[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}
 */
/**
 * 倒序遍历，避免删除元素后索引发生变化的问题
 */
export function _pull<T>(array: T[], ...resValues: T[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < resValues.length; j++) {
      if (array[i] === resValues[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}

/** 使用 Set 优化查找性能 */
export function _pull2<T>(array: T[], ...resValues: T[]) {
  const valuesToRemove = new Set(resValues);
  // 从后往前遍历
  for (let i = array.length - 1; i >= 0; i--) {
    if (valuesToRemove.has(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}
