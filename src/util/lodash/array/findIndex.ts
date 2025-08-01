/**
 * 返回第一个通过 predicate 判断为true的元素的索引值 (index)
 *
 * @template T
 * @param {T} array 要搜索的数组
 * @param {*} predicate 每次迭代时调用
 * @param {number} [fromIndex=1] The index to search from.
 */
export function _findIndex<T>(array: T[], predicate: I_predicate<T>, fromIndex = 0) {
  if (!array || array.length === 0) return -1;
  // 参数 predicate 有多种类型，因此需要将该参数统一成一个处理函数
  // 下面先考虑最简单的一种类型，predicate为一个处理函数
  const predicateFn = createPredicateFn(predicate);
  for (let i = fromIndex; i < array.length; i++) {
    if (predicateFn(array[i], i, array)) {
      // 通过 predicate 判断传入的数组元素是否为真，若为true,则返回当前的数组索引
      return i;
    }
  }
  return -1;
}

/**
 * 函数类型
 * @param value 数组中当前正在处理的元素
 * @param index 正在处理的元素在数组中的索引
 * @param arr 调用了 predicate() 的数组本身
 */
type FuncPredicateType<T> = (value: T, index: number, arr: T[]) => boolean;

// 实际上 predicate 具备多种类型
type I_predicate<T> = FuncPredicateType<T> | string | [keyof T, any] | Partial<T>;

function createPredicateFn<T>(predicate: I_predicate<T>): FuncPredicateType<T> {
  const isObjectType = checkDataType(predicate) === "Object";
  const isArrayType = checkDataType(predicate) === "Array";
  const isStringType = checkDataType(predicate) === "String";
  const isFuncType = checkDataType(predicate) === "Function";
  if (isFuncType) return predicate as FuncPredicateType<T>;

  // 匹配对象属性
  if (isObjectType) {
    return (item: T) => {
      // 传入对象的某某属性值与当前predicate参数中某某属性值不同则返回false,否则返回true
      for (const key in predicate as Partial<T>) {
        if ((predicate as Partial<T>)[key] !== item[key]) {
          return false;
        }
      }
      return true;
    };
  }

  // 匹配属性名和属性值
  if (isArrayType) {
    const [key, value] = predicate as [keyof T, any];
    // 判断传入的某某属性名对应的属性值是否和 predicate中的相同，例如['active',false]。
    // 是则返回 true
    return (item: T) => item[key] === value;
  }

  // 匹配指定属性为真的元素
  if (isStringType) {
    return (item: T) => {
      // keyof 关键字接受一个接口类型，返回接口类型所有键的联合类型
      const value = item[predicate as keyof T];
      return Boolean(value);
    };
  }

  return () => false;
}

function checkDataType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

const obj = {
  name: "占山",
  age: 201,
};

const Test: keyof typeof obj = "name";

console.log(Test);
// keyof 接受一个对象(接口)类型作为参数，返回该对象的所有键名组成的联合类型
// 往往用于精确表达对象的属性类型。
