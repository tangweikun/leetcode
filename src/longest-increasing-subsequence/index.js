// HELP:

export function lengthOfLIS(nums) {
  if (nums.length == 0) return 0;
  let res = 1;
  const dp = Array(nums.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < dp.length; i++) {
    let maxVal = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxVal = Math.max(maxVal, dp[j]);
      }
    }
    dp[i] = maxVal + 1;
    res = Math.max(res, dp[i]);
  }

  return res;
}
