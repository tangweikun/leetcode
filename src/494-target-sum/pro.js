// HELP:

export const findTargetSumWays = (nums, S) => {
  let dp = Array(2001).fill(0);
  dp[nums[0] + 1000] = 1;
  dp[-nums[0] + 1000] += 1;

  for (let i = 1; i < nums.length; i++) {
    const next = Array(2001).fill(0);
    for (let sum = -1000; sum <= 1000; sum++) {
      if (dp[sum + 1000] > 0) {
        next[sum + nums[i] + 1000] += dp[sum + 1000];
        next[sum - nums[i] + 1000] += dp[sum + 1000];
      }
    }
    dp = next;
  }

  return S > 1000 ? 0 : dp[S + 1000];
};
