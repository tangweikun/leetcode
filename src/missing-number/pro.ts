export function missingNumber(nums: number[]) {
  let missing = nums.length

  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i]
  }

  return missing
}
