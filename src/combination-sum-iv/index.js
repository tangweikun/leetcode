// HELP:

export function combinationSum4(nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    nums.forEach(n => {
      if (n <= i) dp[i] += dp[i - n];
    });
  }

  return dp[target];
}
