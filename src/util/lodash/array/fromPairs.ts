/**
 * 返回由键值对数组构成的对象
 * @param array
 * @returns 返回一个新对象
 */
export function _fromPairs<T extends keyof any, U>(array: [T, U][]): Record<T, U> {
  const obj = {} as Record<T, U>;
  // array.forEach(([k, v]) => {
  //   obj[k] = v;
  // });
  for (const [k, v] of array) {
    obj[k] = v;
  }
  return obj;
}

/**
 * 返回由键值对数组构成的对象
 * @param array
 * @returns 返回一个新对象
 */
export function _fromPairs2<T extends keyof any, U>(array: [T, U][]): Record<T, U> {
  // 使用内置的 Object.fromEntries 方法
  return Object.fromEntries(array) as Record<T, U>;
}

/**
 * 返回由键值对数组构成的对象
 * @param array
 * @returns 返回一个新对象
 */
export function _fromPairs3<T extends keyof any, U>(array: [T, U][]): Record<T, U> {
  return array.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<T, U>);
}
