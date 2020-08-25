/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length < 4) return 0;
  nums.sort((x, y) => x - y);

  return Math.min(
    Math.abs(nums[0] - nums[nums.length - 4]),
    Math.abs(nums[1] - nums[nums.length - 3]),
    Math.abs(nums[2] - nums[nums.length - 2]),
    Math.abs(nums[3] - nums[nums.length - 1])
  );
};
