export const numberOfArithmeticSlices = (nums: number[]) => {
  let sum = 0

  const slices = (nums: number[], i: number): any => {
    let ap = 0
    if (nums[i] + nums[i - 2] === 2 * nums[i - 1]) {
      ap = 1 + slices(nums, i - 1)
      sum += ap
    } else if (i >= 2) {
      slices(nums, i - 1)
    }
    return ap
  }

  slices(nums, nums.length - 1)
  return sum
}
