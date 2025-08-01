// 对象：匹配对象属性
// 数组：匹配属性名和值（如 ['active', false]）
// 字符串：匹配指定属性为真的元素
// 函数：匹配经过函数调用后返回true的元素
export function _findIndex<T>(
  array: T[],
  predicate: I_predicate<T> | Partial<T> | [keyof T, any] | string,
  fromIndex = 0) {
  // 边界值处理
  if (!array || array.length === 0) return -1;
  // 标准化 predicate 为函数形式
  const predicateFn = createPredicate(predicate);
  for (let i = fromIndex; i < array.length; i++) {
    // 这个 `predicateFn` 会在每一次迭代调用
    if (predicateFn(array[i], i, array)) return i;
  }
  return -1;
};

/* -------------------------------------------------------------------------- */
type I_predicate<T> = (value: T, index: number, arr: T[]) => boolean

// 该函数的返回值类型一定是一个判断函数
function createPredicate<T>(predicate: I_predicate<T> | Partial<T> | [keyof T, any] | string): I_predicate<T> {
  // 1、predicate是函数的情况
  const funcCase = determineDataType(predicate) === 'Function';
  // 2、predicate是非数组对象的情况,匹配的是对象属性
  const notArrayObjectCase = determineDataType(predicate) === 'Object' && determineDataType(predicate) !== 'Array';
  // 3、predicate是数组的情况,匹配的是属性名和属性值(如['active',false])
  const isArrayTypeCase = determineDataType(predicate) === 'Array';
  // 4、predicate是字符串的情况，匹配指定属性为true的元素
  const stringTypeCase = determineDataType(predicate) === 'String';

  if (funcCase) return predicate as I_predicate<T>;

  if (notArrayObjectCase) {
    return (item: T) => {
      for (const key in predicate as Partial<T>) {
        if ((predicate as Partial<T>)[key] !== item[key]) {
          return false
        }
      }
      return true
    }
  }

  if (isArrayTypeCase) {
    // 数组匹配
    const [key, value] = predicate as [keyof T, any];
    return (item: T) => item[key] === value;
  }

  if (stringTypeCase) {
    // 检查属性是否存在且属性值是否为真
    return (item: T) => {
      const value = item[predicate as keyof T];
      // !!符号表示将一个值转换为其对应的Boolean类型
      return !!value;
    }
  }

  return () => false;
}

/** 准确判断数据类型 */
function determineDataType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

