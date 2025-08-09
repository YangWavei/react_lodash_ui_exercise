export const setDemo1 = () => {
  // set 类似于数组，但是它的所有成员都是唯一的,没有重复的值
  // 因此可用 Set 进行数组去重
  const arr = [1, 2, 3, 5, 4, 3, 2, 1, 3]
  // 去除数组 `arr` 中的重复成员
  const newArray = [...new Set(arr)]
  // 去除数组中的重复字符串
  // description:
  // `Set` 构造函数接受任何可迭代对象作为参数，当 `Set`接受到
  // 字符串时，会自动将其拆分成单个字符进行迭代
  // `Set` 会保留唯一字符，去除重复的字符，然后使用
  // 展开运算符(...)将 `Set` 转换为数组
  // 此时得到的是去重之后的字符数组，最后使用join()方法拼接字符串
  const filterRepeatStr = [...new Set('abcdeabscdesasaddshahsd')].join('')
  console.log("🚀 ~ setDemo1 ~ filterRepeatStr:", filterRepeatStr)
  console.log("🚀 ~ setDemo1 ~ newArray:", newArray)

  // 初始化 set 
  const set1 = new Set<(number | string)>(arr);
  set1.add('你好')
  console.log(set1);
  console.log(set1.keys());
  console.log(set1.values());
  console.log(set1.size);
  /* -------------------------------------------------------------------------- */
  // 两个对象总是不相等的,但是 `NAN` 会被认为相同
  const set2 = new Set();
  set2.add({})
  set2.add({})
  console.log(set2);

  set2.add(NaN)
  set2.add(NaN)
  console.log(set2);
  /* -------------------------------------------------------------------------- */
  // Array.from() 可以将 Set 结构转换为数组
  const items = new Set([1, 2, 3, 4, 5, 3, 5, 44, 6])
  const array = Array.from(items)
  console.log("🚀 ~ setDemo1 ~ array:", array)
  console.log(dedupe([11, 22, 11, 3, 21, 22, 3]).sort((a, b) => a - b));

  const colorSet = new Set([Color.blue, Color.green, Color.red]);
  for (const item of colorSet.entries()) {
    // keys,values，entries方法都是返回 `遍历器对象`,由于 `Set` 没有键名
    // 只有键值，所以keys方法和values方法的行为完全一致
    console.log(item);
  }
  // Set 结构实例默认可遍历
  for (const item of colorSet) {
    console.log(item);
  }
  /* -------------------------------------------------------------------------- */
  let set3 = new Set([1, 2, 4])
  set3 = new Set([...set3].map(x => x * 2))
  console.log(set3);

  let set4 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5])
  set4 = new Set([...set4].filter(x => x % 2 === 0))
  console.log(set4);
};

enum Color {
  green = 'green',
  red = 'red',
  blue = 'blue'
}

/** 数组去重的方案 */
function dedupe<T>(array: T[]) {
  return Array.from(new Set(array))
}