// Time complexity : O(n). We traverse over the given A array with n elements once only.
// Space complexity : O(n). 1-D dp of size n is used.
// DP
// HELP:

export const numberOfArithmeticSlices = (nums: number[]) => {
  let dp = Array(nums.length).fill(0)
  let sum = 0

  for (let i = 2; i < dp.length; i++) {
    if (nums[i] + nums[i - 2] === 2 * nums[i - 1]) {
      dp[i] = 1 + dp[i - 1]
      sum += dp[i]
    }
  }

  return sum
}
