/**
 * 将两个数组合并成一个对象，第一个数组的元素作为键，第二个数组的元素作为值。
 *
 * 该函数接受两个数组作为参数，将第一个数组中的元素作为对象的键，
 * 将第二个数组中对应位置的元素作为对象的值，创建一个新的对象。
 * 如果两个数组长度不同，结果对象将只包含较短数组长度的键值对。
 *
 * @template T extends PropertyKey 键的类型，必须是合法的对象键类型（string、number、symbol）
 * @template U 值的类型，可以是任意类型
 *
 * @param props - 用作对象键的数组，数组中的每个元素将成为结果对象的一个键
 * @param values - 用作对象值的数组，数组中的每个元素将按照索引位置对应到结果对象的值
 *
 * @returns 返回一个新对象，其键来自 `props` 数组，值来自 `values` 数组
 *
 * @example
 * // 基本用法
 * _zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 *
 * @example
 * // 使用不同类型的键和值
 * _zipObject([1, 2, 3], ['one', 'two', 'three']);
 * // => { '1': 'one', '2': 'two', '3': 'three' }
 *
 * @example
 * // 数组长度不匹配的情况
 * _zipObject(['a', 'b', 'c'], [1, 2]);
 * // => { 'a': 1, 'b': 2, 'c': undefined }
 *
 * @example
 * // 空数组
 * _zipObject([], []);
 * // => {}
 */
export function _zipObject<T extends PropertyKey, U>(props: T[], values: U[]) {
  return props.reduce((res, cur, index) => {
    res[cur] = values[index];
    return res;
  }, {} as Record<T, U>);
}

/** _zipObject 函数最优化版本 */
export function _zipObject2<T extends PropertyKey, U>(props: T[], values: U[]) {
  const result = {} as Record<T, U>;
  for (let i = 0; i < props.length; i++) {
    result[props[i]] = i < values.length ? values[i] : (undefined as any);
  }
  return result;
}

/** _zipObject  使用 Object.fromEntries 的现代实现 */
export function _zipObject3<T extends PropertyKey, U>(props: T[], values: U[]) {
  return Object.fromEntries(props.map((key, index) => [key, values[index]]));
}
