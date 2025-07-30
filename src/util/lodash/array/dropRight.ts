/**
 * @description Create a slice and remove the last n element of the array.
 * (The default value of n is 1)
 * @param array 
 * @param n 
 * @returns 
 */
export function _dropRight<T>(array: T[], n = 1) {
  if (n >= array.length) return []
  return array.slice(0, array.length - n)
};
