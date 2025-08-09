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
