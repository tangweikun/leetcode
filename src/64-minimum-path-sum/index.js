export function minPathSum(nums) {
  const dp = Array(nums.length)
    .fill(0)
    .map(_ => Array(nums[0].length).fill(0));

  dp[0][0] = nums[0][0];
  for (let m = 1; m < nums.length; m++) {
    dp[m][0] = dp[m][0] = nums[m][0] + dp[m - 1][0];
  }

  for (let n = 1; n < nums[0].length; n++) {
    dp[0][n] = dp[0][n] = nums[0][n] + dp[0][n - 1];
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j < nums[0].length; j++) {
      dp[i][j] = nums[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[nums.length - 1][nums[0].length - 1];
}
