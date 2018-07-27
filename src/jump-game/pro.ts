// HELP:

export function canJump(nums: number[]) {
  let minJumps = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= minJumps) minJumps = 1
    else minJumps++
  }

  return minJumps === 1
}
