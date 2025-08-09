/**
 * Sort an array without modifying it and return
 * the newly sorted value. Allows for a string
 * sorting value.
 * @param array
 * @param getter
 * @param dir
 * @returns
 */
export function _alphabetical<T>(
  array: readonly T[],
  getter: (item: T) => string,
  dir: 'desc' | 'asc' = 'asc'
) {
  // 构造比较函数
  // ${getter(a)} is referenceStr 
  // getter(b) is compareStr
  // A negative number if referenceStr occurs before compareString; 
  // positive if the referenceStr occurs after compareString; 
  // 0 if they are equivalent.
  const asc = (a: T, b: T) => `${getter(a)}`.localeCompare(getter(b));
  const desc = (a: T, b: T) => `${getter(b)}`.localeCompare(getter(a));

  return array.slice().sort(dir === 'desc' ? desc : asc);
}

/* -------------------------------------------------------------------------- */

/**
 * Reduce a list of items down to one item.
 * Given an array of items return the final item that wins the comparison condition.
 * Useful for more complicated min/max.
 * @param array 
 * @returns 
 */
export function _boil<T>(array: readonly T[], compareFunc: (a: T, b: T) => T): T | null {
  // Null 判断运算符 `??` 只有在运算符左侧的值为 null 或者 undefined 时，才会返回右侧的值
  if (!array || (array.length ?? 0) === 0) return null;
  // reduce 方法 对数组中的每个元素执行 compareFunc 函数，从左到右将函数应用到每个元素，
  // 最终将数组简化为单个值。比较函数决定在每一步中保留哪个元素，最终返回经过一系列比较后胜出的
  // 元素。
  // reduce() 方法对数组中的每个元素按顺序执行一个提供的 `reducer` 函数,每次运行reducer会将
  // 先前计算的结果作为参数传入，最后将结果汇总为单个返回值
  return array.reduce(compareFunc);
}

/* -------------------------------------------------------------------------- */

/**
 * Split a list into many lists of the given size.
 * Given an array of items and a desired cluster size (n), returns an array of arrays. 
 * Each child array containing n (cluster size) items split as evenly as possible.
 * @param array 
 * @param size 
 */
export function _cluster<T>(array: T[], size = 1) {
  if (!array || (array.length ?? 0) === 0) return [];
  const resArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    resArr.push(array.slice(i, i + size));
  }
  return resArr;
}

export function _cluster2<T>(array: T[], size = 1) {
  if (!array || (array.length ?? 0) === 0) return [];
  // 构造一个二维数组
  return Array.from(
    // 使用 Math.ceil() 向上取整，保证子数组不够等分为size长度时也能够有足够的长度
    { length: Math.ceil(array.length / size) },
    // 映射函数
    (_, index) => array.slice(index * size, (index + 1) * size)
  );
}

export function _cluster3<T>(array: T[], size = 1) {
  if (!array || (array.length ?? 0) === 0) return [];
  return array.reduce((res, cur, i) => {
    // determine block index
    const chunkIndex = Math.floor(i / size);
    if (!res[chunkIndex]) res[chunkIndex] = [];
    res[chunkIndex].push(cur);
    return res;
  }, [] as T[][]);
}

export function _cluster4<T>(array: T[], size = 1): T[][] {
  if (!array || (array.length ?? 0) === 0) return [];
  const maxCount = Math.ceil(array.length / size);

  return new Array(maxCount).fill(null).map((_cur, i) => {
    return array.slice(i * size, (i + 1) * size);
  });
}

/* -------------------------------------------------------------------------- */

// 这里 PropertyKey 是准确的类型，因为返回值将作为对象的键
export function _counting<T>(array: T[], getter: (item: T) => PropertyKey) {
  if (!array || (array.length ?? 0) === 0) return null;
  return array.reduce((res, item) => {
    const itemValue = getter(item);
    if (!res[itemValue]) {
      res[itemValue] = 1;
    } else {
      res[itemValue]++;
    }
    return res;
    // Record<Keys , Type> 返回一个对象类型，参数 Keys 用作键名，参数 Type 用作键值类型
  }, {} as Record<PropertyKey, number>);
}

// 这里使用 PropertyKey 类型是准确的，getter函数的返回值要作为对象的键
export function _counting2<T>(array: T[], getter: (item: T) => PropertyKey) {
  if (!array || (array.length ?? 0) === 0) return null;
  const obj: Record<PropertyKey, number> = {};
  array.forEach(cur => {
    const itemValue = getter(cur);
    if (!obj[itemValue]) {
      obj[itemValue] = 1;
    } else {
      obj[itemValue]++;
    }
  });
  return obj;
}

export function _counting3<T>(list: T[], identify: (item: T) => PropertyKey) {
  if (!list || (list.length ?? 0) === 0) return {} as Record<PropertyKey, number>;
  return list.reduce((res, cur) => {
    const curValue = identify(cur);
    // ?? null判断运算符，只有当运算符左侧的值为 null or undefined 时，才会返回运算符右侧的值
    res[curValue] = (res[curValue] ?? 0) + 1;
    return res;
  }, {} as Record<PropertyKey, number>);
}
