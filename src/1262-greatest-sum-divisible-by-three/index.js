/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  const dp = [[0, -Infinity, -Infinity]];
  for (let i = 1; i <= nums.length; i++) {
    dp[i] = [];
    const rest = nums[i - 1] % 3;
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][(3 - rest) % 3] + nums[i - 1]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][(4 - rest) % 3] + nums[i - 1]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][(5 - rest) % 3] + nums[i - 1]);
  }

  return dp[dp.length - 1][0];
};
