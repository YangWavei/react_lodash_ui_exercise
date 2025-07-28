export function arrayCommonMethod() {
  const arr = [1, 2, 3, 4, 5]
  arr.fill(9, 1, 5)
  console.log(arr.toString());
  console.log("🚀 ~ arrayCommonMethod ~ arr:", arr)
}
/**
 * 实现一个函数，将数字数组每个元素乘以2
 * 要求：使用 map 且利用 TypeScript 自动类型推导
 */
export const doubleArray = (arr: number[]) => {
  return arr.map(el => el * 2)
}
// 测试用例
console.log(doubleArray([1, 2, 3])); // [2, 4, 6]


function estimateDataType(n: number | string) {
  return Object.prototype.toString.call(n).slice(8, -1) === 'Number'
}

/**
 * 过滤出所有大于10的数字
 * 要求：结果数组类型为 number[]
 */
export const filterNumbers = (arr: (number | string)[]) => {
  // 类型守卫
  // 类型 谓词语法
  // (parameter):parameter is Type => expression
  return arr.filter((n): n is number => estimateDataType(n)).filter(el => el > 10)
}
// 测试用例
// console.log(filterNumbers([8, '12', 15, 'abc'])); // [12, 15]

/**
 * 实现分组函数，按字符串长度分组
 * 要求：使用 reduce 实现，返回类型为 Record<number, string[]>
 */
export const groupByLength = (arr: string[]): Record<number, string[]> => {
  // 使用 reduce 遍历数组并将其规约为一个对象，初始值为空对象，str 是数组中的元素
  return arr.reduce((acc, str) => {
    const length = str.length;
    // 判断该对象中是否存在 与 `length` 键匹配的对象
    // 如果不存在，则将该 `length` 键匹配的值赋值为一个空数组
    if (!acc[length]) acc[length] = []
    // 存在 将该str添加进去
    acc[length].push(str)
    return acc;
  }, {} as Record<number, string[]>)
}
// 测试用例
console.log(groupByLength(['ts', 'node', 'deno'])); // {2:['ts'], 4:['node','deno']}

interface User {
  id: number;
  name: string;
  active: boolean;
}

/**
 * 查找第一个激活用户
 * 要求：返回类型为 User | undefined
 */
export const findActiveUser = (users: User[]): User | undefined => {
  // `find` 返回满足提供的测试函数的第一个元素的值，否则返回 `undefined`
  return users.find(user => user.active)
}

// 测试用例
export const users: User[] = [
  { id: 1, name: 'A', active: false },
  { id: 2, name: 'B', active: true }
];
console.log(findActiveUser(users)?.name); // 'B'

/**
 * 验证数组是否同时满足：
 * a) 所有数字都大于0
 * b) 至少存在一个大于10的数字
 * 要求：返回元组类型 [boolean, boolean]
 */
const validateArray = (arr: unknown[]): [boolean, boolean] => {
  // When the expression returns true, the type of  `el` is asserted to be true.
  const allPositive = arr.every((el): el is number => typeof el === 'number' && el > 0)
  //Determine whether there is as least one number in the array that is greater than 10.
  const hasLargeNumber = arr.some((el): el is number => typeof el === 'number' && el > 10)
  return [allPositive, hasLargeNumber];
}
// 测试用例
console.log(validateArray([5, 8, 12])); // [true, true]
console.log(validateArray([-1, 0, 3])); // [false, false]
/* -------------------------------------------------------------------------- */
/**
 * 将句子数组拆分为单词数组
 * 示例：['Hello world', 'TypeScript rocks'] → ['Hello','world','TypeScript','rocks']
 * 要求：使用 flatMap 完成
 */
export const splitSentences = (sentences: string[]): string[] => {
  // `\s` 在Regex中用于匹配空格，而 `+` 表示此模式出现一次或多次
  return sentences.flatMap(sentence => sentence.trim().split(/\s+/).filter(word => word.length > 0))
}
// 测试用例
console.log(splitSentences(['Web开发 工程实践', 'TS 强类型']));
/* -------------------------------------------------------------------------- */

/**
 * 处理产品数据：
 * 1. 过滤出库存大于0的产品
 * 2. 将价格转换为美元（乘汇率）
 * 3. 按价格降序排序
 */
interface Product {
  id: string;
  price: number; // CNY
  stock: number;
}

export const processProducts = (products: Product[], exchangeRate: number): Product[] => {
  return products
    .filter(product => product.stock > 0)
    // 修改product对象中的 `price` 属性
    .map(product => ({ ...product, price: product.price * exchangeRate }))
    .sort((a, b) => b.price - a.price)//按价格降序排序
  // sort(compareFn)
  // compareFn 比较函数中的 a,b 两个参数代表数组中正在比较的两个元素
  // 在每次比较中，`a`是第一个元素，`b` 是第二个元素
  // compareFn 返回值 <0 ，a会排在b之前
  // compareFn 返回值 >0 ，a会排在b之后
  // compareFn 返回值 =0 ，a和b相对位置不变
}

// 测试用例
export const products: Product[] = [
  { id: 'p1', price: 100, stock: 5 },
  { id: 'p2', price: 200, stock: 0 }
];

console.log(processProducts(products, 0.14));
// 预期: [{id:'p1', price:14, stock:5}]
