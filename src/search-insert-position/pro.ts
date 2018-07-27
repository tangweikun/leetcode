// FIXME:
export function searchInsert1(nums: number[], target: number) {
  const len = nums.length
  let i = 0
  while (i < len) {
    if (target < nums[i]) return i
    else if (target === nums[i]) return i
    i++
  }
  return len
}
