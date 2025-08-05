export function _intersection<T>(...arrays: T[][]) {
  // Object.is() 静态方法用来确定两个值是否为相同值
  // boundary case
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return [...new Set(arrays.flat())]; //去重

  const result: T[] = [];

  const [first, ...rest] = arrays;
  // 以第一个数组为准
  for (const item of first) {
    // My interpretation:
    // example rest=[[1,9],[3,5,7]]
    // every() 判断数组中的每一项元素是否都满足给定测试条件
    // some() 这个给定的测试条件是 rest数组中的每一项元素的元素，比如[1,9]中的元素是否至少有
    // 一项使得 Object.is(item,el) 为真，也就是二者的值相等为真
    // 最终的判断就是：当前元素是否在后面传入的数组中都存在
    const isHaveSameValue = rest.every((elArr) => elArr.some((el) => Object.is(item, el)));
    // 检查 result 数组中是否以存在相同元素
    const isExisting = !result.includes(item);
    if (isHaveSameValue) isExisting && result.push(item);
  }
  return result;
}
