/**
 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，\
 * 使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
 * @param array 待检查的数组
 * @returns 一个包含所有传入数组交集的新数组
 */
export function _intersection<T>(...arrays: T[][]) {
  // 边界情况处理
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return [...new Set(arrays.flat())];
  }
  // (...剩余参数语法，rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中)
  const [first, ...rest] = arrays;
  const result: T[] = [];
  // 以第一个数组为基准
  for (const item of first) {
    // Object.is() 静态方法确定两个值是否为 `相同值`

    // every() 方法测试一个数组内的所有元素是否都能通过指定函数的测试，返回一个 boolean

    /** 检查当前元素是否在所有的剩余数组中都存在 */
    const condition1 = rest.every((arr) => arr.some((other) => Object.is(item, other)));
    /** 检查结果数组中是否已经包含当前元素(去重) */
    const condition2 = !result.some((existing) => Object.is(existing, item));
    if (condition1) {
      if (condition2) {
        result.push(item);
      }
    }
  }
  return result;
}
