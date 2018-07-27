// HELP:

export function canJump(nums: number[]) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false
    max = Math.max(max, i + nums[i])
  }

  return true
}
