/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 公式：sum(n) = sum(j)-sum(i)+nums[i]
// 1.先求连续子数组和, 动态规划常用公式：dp[i] = dp[i-1]+nums[i]
// 2.再带入公式求和：dp[j]-dp[i]+nums[i]

var checkSubarraySum = function (nums, k) {
  const dp = [nums[0]];
  let sum = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] + nums[i];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = dp[j] - dp[i] + nums[i];

      if (sum === 0 || sum % k === 0) {
        return true;
      }
    }
  }

  return false;
};
