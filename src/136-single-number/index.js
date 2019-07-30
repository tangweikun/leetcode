export function singleNumber(nums) {
  nums.sort();
  for (let i = 1; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i - 1]) return nums[i - 1];
  }

  return nums[nums.length - 1];
}
