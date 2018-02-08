export function findMin(nums: number[]) {
  let min = Infinity

  for (let i = 0; i < nums.length; i++) {
    min = Math.min(nums[i], min)
  }

  return min
}
