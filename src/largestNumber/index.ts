// TODO:

export function largestNumber(nums: number[]) {
  let max = {
    pos: -1,
    value: -1,
  }
  let i = 0
  while (i < nums.length) {
    if (!max) {
      max = { pos: i, value: nums[i] }
    } else {
      if (max.value < nums[i]) {
        if (max.value * 2 <= nums[i]) max = { pos: i, value: nums[i] }
        else max = { pos: -1, value: nums[i] }
      } else {
        if (max.value < nums[i] * 2) max.pos = -1
      }
    }

    i++
  }
  return max.pos
}
