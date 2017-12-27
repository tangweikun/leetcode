// TODO:

export function largestNumber(nums: number[]) {
  let max = { pos: -1, value: -Infinity }
  let i = 0

  while (i < nums.length) {
    if (max.value < nums[i]) {
      max = {
        pos: max.value * 2 <= nums[i] ? i : -1,
        value: nums[i],
      }
    } else if (max.value < nums[i] * 2) {
      max.pos = -1
    }

    i++
  }

  return max.pos
}
