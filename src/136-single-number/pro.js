// Time Complexity O(n)
// Space Complexity O(1)

export function singleNumber(nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
}
