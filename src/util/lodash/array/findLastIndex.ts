/**
 * 该方法从右往左返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
 *
 * @export
 * @template T
 * @param {T[]} array  要搜索的数组。
 * @param {I_Predicate<T>} predicate  (Array|Function|Object|string): 这个函数会在每一次迭代调用
 * @param {number} [fromIndex=array.length - 1] The index to search from.
 * @returns {number} 返回找到元素的 索引值（index），否则返回 -1。
 */
export function _findLastIndex<T>(array: T[], predicate: I_Predicate<T>, fromIndex = array.length - 1) {
  if (!array || array.length < 1) return -1;
  // 首先默认predicate为 函数的情况
  // 统一为 predicate 函数
  const predicateFn = createPredicateFn(predicate);
  for (let i = fromIndex; i >= 0; i--) {
    if (predicateFn(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

/**
 * 定义函数谓词类型，用于判断数组元素是否满足条件
 * @template T - 数组元素的类型
 * @param value - 当前数组元素
 * @param index - 当前元素的索引
 * @param arr - 原始数组
 * @returns boolean - 返回true表示元素满足条件，false表示不满足
 */
type FuncPredicateType<T> = (value: T, index: number, arr: T[]) => boolean;

/**
 * 定义谓词的联合类型，支持多种格式的谓词
 * @template T - 数组元素的类型
 * 可以是：
 * 1. 函数形式：直接判断元素是否满足条件
 * 2. 字符串形式：检查元素对象的指定属性是否为真值
 * 3. 数组形式：[属性名, 属性值]，检查元素对象的指定属性是否等于指定值
 * 4. 对象形式：部分属性匹配，检查元素对象是否包含指定的属性值
 */
type I_Predicate<T> = FuncPredicateType<T> | string | [keyof T, any] | Partial<T>;

/**
 * 创建统一的谓词函数，将不同格式的谓词转换为函数形式
 * @template T - 数组元素的类型
 * @param predicate - 输入的谓词，可以是函数、字符串、数组或对象
 * @returns FuncPredicateType<T> - 返回统一的函数谓词
 *
 * @example
 * // 函数谓词
 * createPredicateFn((item) => item.active)
 *
 * // 字符串谓词
 * createPredicateFn('active')
 *
 * // 数组谓词
 * createPredicateFn(['user', 'fred'])
 *
 * // 对象谓词
 * createPredicateFn({user: 'fred', active: false})
 */
function createPredicateFn<T>(predicate: I_Predicate<T>): FuncPredicateType<T> {
  // 根据传入的 predicate 数据类型分类讨论
  const predicateType = determineDataType(predicate);
  const isStringTypeCase = predicateType === choiceType.String;
  const isObjectTypeCase = predicateType === choiceType.Object;
  const isArrayTypeCase = predicateType === choiceType.Array;
  const isFunctionTypeCase = predicateType === choiceType.Function;

  // 如果是函数类型，直接返回
  if (isFunctionTypeCase) return predicate as FuncPredicateType<T>;

  // 如果是对象类型，创建属性匹配函数
  if (isObjectTypeCase) {
    return (item: T) => {
      // 遍历谓词对象的所有属性，检查是否都匹配
      for (const key in predicate as Partial<T>) {
        if ((predicate as Partial<T>)[key] !== item[key]) {
          return false;
        }
      }
      return true;
    };
  }

  // 如果是数组类型，创建[key, value]匹配函数
  if (isArrayTypeCase) {
    const [key, value] = predicate as [keyof T, any];
    return (item: T) => item[key] === value;
  }

  // 如果是字符串类型，创建属性真值检查函数
  if (isStringTypeCase) {
    return (item: T) => Boolean(item[predicate as keyof T]);
  }

  // 默认返回始终返回false的函数
  return () => false;
}

/**
 * 确定数据的类型
 * @param data - 需要检测类型的数据
 * @returns string - 返回数据的具体类型字符串（如"String"、"Object"等）
 */
function determineDataType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

/**
 * 数据类型枚举，用于谓词类型判断
 */
enum choiceType {
  String = "String",
  Function = "Function",
  Array = "Array",
  Object = "Object",
}
