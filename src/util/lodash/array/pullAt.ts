/**
 * 根据索引 indexs，移除array中对应的元素，并返回移除元素的数组
 * 👶 这个方法会改变原数组 array
 * @param array
 * @param indexs
 * @returns
 */
export function _pullAt<T>(array: T[], ...indexs: number[]) {
  if (indexs.length === 0) return [];
  // 统一移除元素的索引
  const normalizedIndexs = indexs.map((n) => (n < 0 ? n + array.length : n));
  const removedSet = new Set(normalizedIndexs);
  const removedArr: T[] = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    if (removedSet.has(i)) {
      //在数组的开头添加一个元素，保证array 删除元素的顺序(由于是倒序遍历)
      removedArr.unshift(array[i]);
      array.splice(i, 1);
    }
  }
  return removedArr;
}
