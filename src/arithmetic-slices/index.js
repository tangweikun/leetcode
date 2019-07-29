// Time complexity : O(n^2)
// Space complexity : O(1)
// DP

export const numberOfArithmeticSlices = nums => {
  let dp = Array(nums.length).fill(0);
  let sum = 0;

  for (let i = 2; i < dp.length; i++) {
    if (nums[i] + nums[i - 2] === 2 * nums[i - 1]) {
      dp[i] = 1 + dp[i - 1];
      sum += dp[i];
    }
  }

  return sum;
};
