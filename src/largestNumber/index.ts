// TODO: Type check

export function largestNumber(nums: number[]) {
  let max = { pos: -1, value: -Infinity }
  let i = 0

  while (i < nums.length) {
    const currentValue = nums[i]
    max = modifyMax(max, currentValue, i)
    i++
  }

  return max.pos
}

const modifyMax = (max, currentValue: number, index: number) => {
  const maxValue = max.value
  if (maxValue < currentValue) {
    max = {
      pos: maxValue * 2 <= currentValue ? index : -1,
      value: currentValue,
    }
  } else if (maxValue < currentValue * 2) {
    max.pos = -1
  }

  return max
}
