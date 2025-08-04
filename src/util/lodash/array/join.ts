/**
 * 将 array 中的所有元素转换成由 separator 分隔的字符串
 *
 * @export
 * @template T
 * @param {T[]} array
 * @param {string} [separator=","]
 * @returns {string}
 */
export function _join<T>(array: T[], separator = ",") {
  let str = "";
  array.forEach((el, index) => {
    str += el + (index < array.length - 1 ? separator : "");
  });
  return str;
}

/**
 * 将 array 中的所有元素转换成由 separator 分隔的字符串
 *
 * @export
 * @template T
 * @param {T[]} array
 * @param {string} [separator=","]
 * @returns {string}
 */
export function _join2<T>(array: T[], separator = ",") {
  let str = "";
  array.forEach((el, index) => {
    str += el;
    if (index < array.length - 1) str += separator;
  });
  return str;
}
