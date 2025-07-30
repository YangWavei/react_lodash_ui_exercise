export const _drop = <T>(array: T[], n = 1) => {
  // slice() method returns a `shallow copy` of a portion of an array into
  // a new array object selected from `start` to `end` 
  return array.slice(n)
};
