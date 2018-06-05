export const sortColors = (nums: number[]) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    if (nums[left] === 2) {
      nums.splice(left, 1)
      nums.push(2)
      right--
    } else if (nums[left] === 0) {
      nums.splice(left, 1)
      nums.unshift(0)
      left++
    } else {
      left++
    }
  }

  return nums
}
