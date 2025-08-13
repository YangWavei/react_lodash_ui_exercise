
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
  list: T[],
  getter: (v: T) => string,
  dir: 'asc' | 'desc' = 'asc'
) {
  // 默认升序排列
  // notice:sort()函数的返回值是经过排序的原始数组的引用，会修改原数组
  // 所以这里拷贝一份新数组，再对新数组进行排序
  // ascending function
  const asc = (a: T, b: T) => `${getter(a)}`.localeCompare(getter(b));
  // descending function
  const desc = (a: T, b: T) => `${getter(b)}`.localeCompare(getter(a));
  return list.slice().sort(dir === 'desc' ? desc : asc);
}
/* -------------------------------------------------------------------------- */

/**
 * Reduce a list of items down to one item.
 * Given an array of items return the final item that wins the comparison condition.
 * Useful for more complicated min/max.
 * @param array 
 * @returns 
 */
export function _boil<T>(array: readonly T[], func: (a: T, b: T) => T) {
  if (!array || (array.length ?? 0) === 0) {
    return null;
  }
  return array.reduce(func);
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

/* -------------------------------------------------------------------------- */

/**
 * Given two arrays, returns an array of all items that exist in the first array 
 * but do not exist in the second array.
 */
export function _diff<T>(first: T[], second: T[]) {
  const isArray = Array.isArray(first) && Array.isArray(second);
  if (!isArray) {
    throw new Error("输入参数类型必须为 Array");
  }
  return first.filter(cur => !second.includes(cur));
}

/**
 * Given two arrays, returns an array of all items that exist in the first array 
 * but do not exist in the second array.
 */
export function _diff2<T>(first: T[], second: T[]) {
  const isArray = Array.isArray(first) && Array.isArray(second);
  if (!isArray) throw new Error("参数类型错误");
  const resArr: T[] = [];

  first.forEach(fir => {
    let flag = false;
    second.forEach(sec => {
      if (fir === sec) {
        flag = true;
      }
    });
    if (!flag) {
      resArr.push(fir);
    }
  });
  return resArr;
}

/**
 * Given two arrays, returns an array of all items that exist in the first array 
 * but do not exist in the second array.
 */
export function _diff3<T>(first: T[], second: T[]) {
  const isArray = Array.isArray(first) && Array.isArray(second);
  if (!isArray) throw new Error("参数类型错误");
  return first.reduce((res, cur) => {
    let flag = false;
    second.forEach(sec => {
      if (sec === cur) flag = true;
    });
    if (!flag) {
      res.push(cur);
    }
    return res;
  }, [] as T[]);
}

/**
 * Given two arrays, returns an array of all items that exist in the first array 
 * but do not exist in the second array.
 */
export function _diff4<T>(first: T[], second: T[]) {
  const isArray = Array.isArray(first) && Array.isArray(second);
  if (!isArray) throw new Error("参数错误");

  const resArr: T[] = [];
  for (let i = 0; i < first.length; i++) {
    let flag = false;
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        flag = true;
        break;
      }
    }
    if (!flag)
      resArr.push(first[i]);
  }
  return resArr;
}


/* -------------------------------------------------------------------------- */


// ... existing code ...
/**
 * 将数组扁平化一层
 * @param array 需要扁平化的数组
 * @returns 扁平化后的数组
 */
export function _flat<T>(array: T[]) {
  if (!array || (array.length ?? 0) === 0) return [];
  return array.flat();
}

/**
 * 将二维数组扁平化为一维数组
 * @param array 需要扁平化的二维数组
 * @returns 扁平化后的一维数组
 */
export function _flat2<T>(array: T[][]) {
  if (!array || (array.length ?? 0) === 0) return [];

  const resArr = [];
  // 遍历数组中的每个元素
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // 如果元素是数组，则展开并添加到结果数组中
      resArr.push(...array[i]);
    } else {
      // 如果元素不是数组，则直接添加到结果数组中
      resArr.push(array[i]);
    }
  }
  return resArr;
}

/**
 * 使用 reduce 方法将二维数组扁平化为一维数组
 * @param list 需要扁平化的二维数组
 * @returns 扁平化后的一维数组
 */
export function _flat3<T>(list: T[][]) {
  if (!list || (list.length ?? 0) === 0) return [];
  // 使用 reduce 累积器将数组元素合并到一个数组中
  return list.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      // 如果当前元素是数组，则展开并添加到累积器中
      acc.push(...cur);
    } else {
      // 如果当前元素不是数组，则直接添加到累积器中
      acc.push(cur);
    }
    return acc;
  }, []);
}

/* -------------------------------------------------------------------------- */

/**
 * 根据条件函数将数组拆分为两个数组
 * 
 * 给定一个项目数组和一个条件函数，返回两个数组：
 * 第一个数组包含所有通过条件检查的项目，
 * 第二个数组包含所有未通过条件检查的项目。
 * 
 * @param list - 需要拆分的项目数组
 * @param filterFun - 用于测试每个项目的条件函数，返回 boolean 值
 * @returns 包含两个数组的数组：第一个是通过条件的项目数组，第二个是未通过条件的项目数组
 */
export function _fork<T>(list: T[], filterFun: (a: T) => boolean) {
  if (!Array.isArray(list) || (list.length ?? 0) === 0) return [];

  const res = [];
  const pass = [];
  const fail = [];

  for (const item of list) {
    // 根据条件函数的结果将项目分类到通过或未通过数组
    if (filterFun(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  }

  res.push(pass, fail);

  return res;
}

/**
 * 根据条件函数将数组拆分为两个数组
 * 
 * 给定一个项目数组和一个条件函数，返回两个数组：
 * 第一个数组包含所有通过条件检查的项目，
 * 第二个数组包含所有未通过条件检查的项目。
 * 
 * @param list - 需要拆分的项目数组
 * @param filterFun - 用于测试每个项目的条件函数，返回 boolean 值
 * @returns 包含两个数组的数组：第一个是通过条件的项目数组，第二个是未通过条件的项目数组
 */
export function _fork2<T>(list: T[], filterFun: (a: T) => boolean) {
  if (!Array.isArray(list) || (list.length ?? 0) === 0) return [];

  return list.reduce((res, item) => {
    if (filterFun(item)) {
      res[0].push(item);
    } else {
      res[1].push(item);
    }
    return res;
  }, [[], []] as [T[], T[]]);
}

/**
 * Split an array into two array based on
 * a true/false condition function
 */
export function _fork3<T>(list: readonly T[], condition: (item: T) => boolean): [T[], T[]] {
  return list.reduce((acc, cur) => {
    const [pass, fail] = acc;
    if (condition(cur)) {
      return [[...pass, cur], fail];
    } else {
      return [pass, [...fail, cur]];
    }
  }, [[], []] as [T[], T[]]);
}

/* -------------------------------------------------------------------------- */

/**
 * 根据给定的条件函数对数组进行分组
 * 通常，这对于对数组进行分类很有用
 * @param list 需要分组的元素数组
 * @param condition 用于确定每个元素分组的函数，返回用作分组键的属性值
 * @returns 一个对象，其键是分组条件产生的值，值是属于该组的元素数组
 */
export function _group<T>(list: T[], condition: (item: T) => PropertyKey): Partial<Record<PropertyKey, T[]>> {
  return list.reduce((acc, cur) => {
    const resKey = condition(cur);
    if (!acc[resKey]) acc[resKey] = [];
    acc[resKey].push(cur);
    return acc;
  }, {} as Record<PropertyKey, T[]>);
}
/**
 * Sorts an array of items into groups. The return value is a map where the keys are
 * the group ids the given getGroupId function produced and the value is an array of
 * each item in that group.
 */
export const _group2 = <T, Key extends string | number | symbol>(
  array: readonly T[],
  getGroupId: (item: T) => Key
): Partial<Record<Key, T[]>> => {
  return array.reduce((acc, item) => {
    const groupId = getGroupId(item);
    if (!acc[groupId]) acc[groupId] = [];
    acc[groupId].push(item);
    return acc;
  }, {} as Record<Key, T[]>);
};

/**
 * Sorts an array of items into groups. The return value is a map where the keys are
 * the group ids the given getGroupId function produced and the value is an array of
 * each item in that group.
 */
export function _group3<T>(list: T[], condition: (item: T) => PropertyKey): Partial<Record<PropertyKey, T[]>> {
  const obj = {} as Partial<Record<PropertyKey, T[]>>;

  list.forEach(cur => {
    const key = condition(cur);
    if (!obj[key]) obj[key] = [];
    obj[key].push(cur);
  });

  return obj;
}

/* -------------------------------------------------------------------------- */
/**
 * Given two arrays of item,returns true if any item exists in both arrays.
 */
export function _intersects<T>(firstArr: T[], secondArr: T[]) {
  if (!firstArr || !secondArr) return false;
  // 以第一个数组为基准
  return firstArr.some(f => secondArr.includes(f));
}

/**
 * Given two arrays of item,returns true if any item exists in both arrays.
 */
export function _intersects2<T>(listA: T[], listB: T[]) {
  if (!listA || !listB) return false;
  let flag = false;
  for (let i = 0; i < listA.length; i++) {
    for (let j = 0; j < listB.length; j++) {
      if (listA[i] === listB[j]) {
        flag = true;
        break;
      }
    }
  }
  return flag;
}

/* -------------------------------------------------------------------------- */

/**
 * 重复执行指定次数的函数，并将上一次的结果传递给下一次执行
 * 
 * @param count 执行次数
 * @param func 每次执行的函数，接收上一次的结果和当前索引作为参数
 * @param initValue 初始值
 * @returns 经过 count 次迭代计算后的最终结果
 */
export function _iterate<T>(count: number, func: (cur: T, idx: number) => T, initValue: T) {
  let result = initValue;
  for (let i = 1; i <= count; i++) {
    // 将上一次函数计算结果作为参数传递给下一次func的调用
    result = func(result, i);
  }
  return result;
}
/* -------------------------------------------------------------------------- */

/**
 * 获取数组的最后一个元素
 * @param list - 要获取最后一个元素的数组
 * @param defaultValue - 当数组为空时返回的默认值，默认为 undefined
 * @returns 数组的最后一个元素，如果数组为空则返回默认值
 */
export function _last<T>(list: T[], defaultValue?: T) {
  if (!Array.isArray(list) || (list.length ?? 0) === 0) return defaultValue;
  return list[list.length - 1];
}

export function _last2<T>(list: T[], defaultValue: T | null | undefined) {
  return list?.length > 0 ? list[list.length - 1] : defaultValue;
}

/* -------------------------------------------------------------------------- */
export function _min<T>(array: readonly T[], getter?: (item: T) => number) {
  // 若 getter 为 undefined 或 null 则使用恒等函数，这个函数直接返回输入的值本身
  const get = getter ?? ((v: any) => v);
  return _boil(array, (a, b) => (get(a) < get(b) ? a : b));
}

export function _max<T>(array: T[], getter?: (item: T) => number) {
  const get = getter ?? ((v: any) => v);
  return _boil(array, (a, b) => (get(a) > get(b) ? a : b));
}

export function _merge<T extends Record<PropertyKey, any>, K extends keyof T>(
  originArr: T[],
  newArr: T[],
  compareFn: (item: T) => T[K]) {
  newArr.forEach(newItem => {
    const existingIndex = originArr.findIndex(originItem => compareFn(originItem) === compareFn(newItem));
    if (existingIndex !== -1) {
      originArr[existingIndex] = newItem;
    } else {
      originArr.push(newItem);
    }
  });
  return originArr;
}

/* -------------------------------------------------------------------------- */
export function _replaceOrAppend<T extends Record<PropertyKey, any>>(
  array: T[],
  item: T,
  getter: (v: T) => boolean) {
  if (!Array.isArray(array)) throw new Error("参数错误");

  const existIdx = array.findIndex(v => getter(v) === getter(item));
  if (existIdx !== -1) {
    array[existIdx] = item;
  } else {
    array.push(item);
  }
  return array;
}