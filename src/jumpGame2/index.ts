// HELP:

export function jump(nums: number[]) {
  let jumps = 0
  let curEnd = 0
  let curFarthest = 0

  for (let i = 0; i < nums.length - 1; i++) {
    curFarthest = Math.max(i + nums[i], curFarthest)
    if (i === curEnd) {
      jumps++
      curEnd = curFarthest
    }
  }

  return jumps
}
