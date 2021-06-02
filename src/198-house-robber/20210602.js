/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(~~dp[i - 1], ~~dp[i - 2] + nums[i]);
  }

  return Math.max(dp[nums.length - 1], ~~dp[nums.length - 2]);
};
