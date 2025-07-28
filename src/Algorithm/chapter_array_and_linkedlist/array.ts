/** 随机访问数组元素 */
export function randomAccess(nums: number[]) {
  const random_index = Math.floor(Math.random() * nums.length)
  return nums[random_index]
}
/* -------------------------------------------------------------------------- */

/** 扩展数组长度 */
export function extend(nums: number[], enlarge: number) {
  // 创建一个扩容后的新数组
  // const newArr = new Array(nums.length + enlarge).fill(0)
  // for (let i = 0; i < newArr.length; i++) {
  //   newArr[i] = nums[i]
  // }
  // const newArr = [...nums, ...new Array(enlarge).fill(0)]
  // 将nums数组中的内容复制到新数组中，并指定默认值 0
  const newArr = Object.assign(new Array(nums.length + enlarge), nums)
  return newArr
}
/* -------------------------------------------------------------------------- */

/** 在数组的 index 处插入元素 num */
export function insert(nums: number[], num: number, index: number) {
  // for (let i = nums.length - 1; i > index; i--) {
  //   nums[i + 1] = nums[i]
  // }
  // nums[index] = num
  // 上面的过程可简化为下面一行code
  nums.splice(index, 0, num)
}
/* -------------------------------------------------------------------------- */

/** 删除索引 index 处的元素  */
export function remove(nums: number[], index: number) {
  for (let i = index; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1]
  }
}
/* -------------------------------------------------------------------------- */

/** 遍历元素 */
export const traverse = (nums: number[]) => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count = nums[i]
  }

  for (const item of nums) {
    count = item
  }

  nums.forEach(el => count = el)
};
/* -------------------------------------------------------------------------- */

/** 在数组中查找指定元素的索引 */
export const findTarget = (nums: number[], target: number) => {
  let targetIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      targetIndex = i
      return targetIndex
    }
  }
  const resIndex = nums.findIndex(el => el === target)
  return [targetIndex, resIndex];
}
/* -------------------------------------------------------------------------- */



