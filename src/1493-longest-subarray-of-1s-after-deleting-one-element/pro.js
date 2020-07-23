/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let length = nums.length;
  let left = 0;
  let right = 0;
  let max = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 1) {
      right++;
    } else {
      left = right;
      right = 0;
    }
    max = Math.max(max, left + right);
  }

  return Math.min(max, nums.length - 1);
};
