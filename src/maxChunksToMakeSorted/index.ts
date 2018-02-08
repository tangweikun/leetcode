// HELP:
export function maxChunksToSorted(nums: number[]) {
  let ans = 0
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i])
    if (max === i) ans++
  }

  return ans
}
