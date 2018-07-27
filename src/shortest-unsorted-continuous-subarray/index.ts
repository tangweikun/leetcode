export const findUnsortedSubarray = (nums: number[]) => {
  const sortedNums = [...nums].sort((x, y) => x - y)
  const left = getLeft(nums, sortedNums)
  if (nums.length === left) return 0

  return nums.length - left - getRight(nums, sortedNums)
}

const getLeft = (nums: number[], sortedNums: number[]) => {
  let left = 0
  let i = 0
  while (nums[i] === sortedNums[i] && i < nums.length) {
    left++
    i++
  }
  return left
}

const getRight = (nums: number[], sortedNums: number[]) => {
  let right = 0
  let i = nums.length - 1
  while (nums[i] === sortedNums[i] && i >= 0) {
    right++
    i--
  }
  return right
}
