export function _findIndex<T>(array: T[], predicate: I_predicate<T>, fromIndex = 0) {
  if (!array || array.length === 0) return -1;
  // 标准化 predicate 为函数形式
  const predicateFn = createPredicateFn(predicate);
  for (let i = fromIndex; i < array.length; i++) {
    if (predicateFn(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

/* -------------------------------------------------------------------------- */
// 1、函数类型
// 2、对象类型 (Partial<Type> 返回一个新类型，将参数类型 Type 的所有属性变为可选属性)
// 3、数组类型
// 4、字符串类型
type PredicateFunction<T> = (value: T, index: number, arr: T[]) => boolean;

type I_predicate<T> = PredicateFunction<T> | Partial<T> | [keyof T, any] | string;

enum ParamType {
  String = "String",
  Function = "Function",
  Array = "Array",
  Object = "Object",
}

// 对象：匹配对象属性
// 数组：匹配属性名和值（如 ['active', false]）
// 字符串：匹配指定属性为真的元素
// 函数：匹配经过函数调用后返回true
function createPredicateFn<T>(predicate: I_predicate<T>): PredicateFunction<T> {
  const stringTypeCase = determineOnlyType(predicate) === ParamType.String;
  const arrayTypeCase = determineOnlyType(predicate) === ParamType.Array;
  const funcTypeCase = determineOnlyType(predicate) === ParamType.Function;
  const objTypeCase = determineOnlyType(predicate) === ParamType.Object;
  
  if (funcTypeCase) return predicate as PredicateFunction<T>;

  // 匹配对象的属性
  if (objTypeCase) {
    return (item: T) => {
      for (const key in predicate as Partial<T>) {
        if ((predicate as Partial<T>)[key] !== item[key]) {
          return false;
        }
      }
      return true;
    };
  }
  // 数组：匹配属性名和值
  if (arrayTypeCase) {
    const [key, value] = predicate as [keyof T, any];
    return (item: T) => item[key] === value;
  }

  if (stringTypeCase) {
    // 检查属性是否存在且属性值是否为真
    return (item: T) => {
      const value = item[predicate as keyof T];
      return !!value;
    };
  }

  return () => false;
}

function determineOnlyType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
