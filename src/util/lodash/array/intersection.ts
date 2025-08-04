export function _intersection<T>(...arrays: T[][]) {
  // 处理边界值情况
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return [...new Set(arrays.flat())]; //去重

  // 以第一个数组为准，求这几个数组的交集，并最终返回一个数组
  // 剩余参数运算符 ... ，rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中
  const [first, ...rest] = arrays;
  const result: T[] = [];
  for (const item of first) {
    // 判断当前元素是否在后面的所有数组中都存在
    // Object.is() 静态方法判断两个值是否相同
    const condition1 = rest.every((arr) => arr.some((el) => Object.is(item, el)));
    if (condition1) {
      // 判断当前元素是否已经存在与 result
      if (!result.some((el) => Object.is(item, el))) {
        result.push(item);
      }
    }
  }
  return result;
}
