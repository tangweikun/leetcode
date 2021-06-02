/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let pre = 0;

  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i]);
    max = Math.max(max, pre);
  }

  return max;
};
