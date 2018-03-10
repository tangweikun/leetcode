export const numberOfArithmeticSlices = (nums: number[]) => {
  let res = 0
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 2
    while (j < nums.length && nums[j] + nums[j - 2] === 2 * nums[j - 1]) {
      res++
      j++
    }
  }

  return res
}
