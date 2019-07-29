// Time complexity : O(n). We traverse over the given A array with n elements once only.
// Space complexity : O(1). Constant extra space is used.
// DP
// HELP:
export const numberOfArithmeticSlices = nums => {
  let dp = 0;
  let sum = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] + nums[i - 2] === 2 * nums[i - 1]) {
      dp = 1 + dp;
      sum += dp;
    } else {
      dp = 0;
    }
  }

  return sum;
};
