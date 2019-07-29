export function findMin(nums) {
  if (nums[0] <= nums[nums.length - 1]) return nums[0];
  let i = nums.length - 2;

  while (i >= 0) {
    if (nums[i] > nums[i + 1]) return nums[i + 1];
    i--;
  }

  return nums[nums.length - 1];
}
