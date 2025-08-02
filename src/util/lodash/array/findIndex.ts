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
  // 统一化为 predicate 函数
  const predicateFn = createPredicateFn(predicate);
  for (let i = fromIndex; i < array.length; i++) {
    // 找到由 predicate 函数判断为真的元素索引值 ，否则返回 -1
    if (predicateFn(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

type FuncPredicateType<T> = (value: T, index: number, arr: T[]) => boolean;

// 实际上 predicate 有多种类型
// let's discuss the following categories separately.
// 1.Function => Return directly as a function.
// 2.Object => 需要构造一个函数，匹配predicate 对象中的属性是否和array中的元素是否匹配
//    (注意传入的predicate属性可能是 array中元素的一部分属性，是可选的)
// 3.Array [属性名，属性值] 构造一个函数，匹配 array 数组中元素的属性名与属性值是否匹配
// 4.字符串，匹配array中元素的 当前'字符串'对应的属性是否返回 true
// (其实我们这里默认T是一个对象类型)

// keyof 接受一个对象(接口)类型作为参数,返回该对象类型的所有键名组成的联合类型
// Partial<Type>  返回一个新的类型,将参数类型 Type的所有属性变为可选属性

type I_predicate<T> = FuncPredicateType<T> | string | [keyof T, any] | Partial<T>;

function createPredicateFn<T>(predicate: I_predicate<T>): FuncPredicateType<T> {
  // 根据传入的 predicate 数据类型分类讨论
  const predicateType = determineDataType(predicate);
  const isStringTypeCase = predicateType === choiceType.String;
  const isObjectTypeCase = predicateType === choiceType.Object;
  const isArrayTypeCase = predicateType === choiceType.Array;
  const isFunctionTypeCase = predicateType === choiceType.Function;

  if (isFunctionTypeCase) return predicate as FuncPredicateType<T>;

  if (isObjectTypeCase) {
    return (item: T) => {
      // for...in 循环迭代一个对象的所有 可枚举字符串属性 (Symbol属性除外)
      for (const key in predicate as Partial<T>) {
        if (item[key] !== (predicate as Partial<T>)[key]) {
          return false;
        }
      }
      return true; // predicate 在array中是存在的
    };
  }

  if (isArrayTypeCase) {
    const [key, value] = predicate as [keyof T, any];
    return (item: T) => item[key] === value;
  }

  if (isStringTypeCase) {
    return (item: T) => Boolean(item[predicate as keyof T]);
  }

  return () => false;
}

function determineDataType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

enum choiceType {
  String = "String",
  Function = "Function",
  Array = "Array",
  Object = "Object",
}
