export function maximumProduct(nums) {
  nums.sort((x, y) => x - y);
  const length = nums.length;

  return Math.max(
    nums[0] * nums[1] * nums[length - 1],
    nums[length - 1] * nums[length - 2] * nums[length - 3],
  );
}
