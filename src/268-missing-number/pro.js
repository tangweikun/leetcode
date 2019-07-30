export function missingNumber(nums) {
  let missing = nums.length;

  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }

  return missing;
}
