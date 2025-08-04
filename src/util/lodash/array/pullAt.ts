/**
 * 根据索引 indexs，移除array中对应的元素，并返回一处元素的数组
 * 👶 这个方法会改变原数组 array
 * @param array
 * @param indexs
 * @returns
 */
export function _pullAt<T>(array: T[], ...indexs: number[]) {
  const res: T[] = [];
  // 统一化需要删除的索引
  const normalizedIndexs = indexs.map((index) => (index < 0 ? indexs.length + index : index));

  // 使用 Set 结构，提高查找效率
  const removedToIndexs = new Set(normalizedIndexs);

  // 从后向前遍历，避免因修改了原数组导致索引发生变化
  for (let i = array.length - 1; i >= 0; i--) {
    if (removedToIndexs.has(i)) {
      // 将指定元素添加到数组的开头，保证删除的元素顺序
      res.unshift(array[i]);
      array.splice(i, 1);
    }
  }
  return res;
}
