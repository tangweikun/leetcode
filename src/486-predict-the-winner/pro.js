// HELP:

export const predictTheWinner = nums => {
  const dp = Array(nums.length).fill([]);

  for (let len = 0; len < nums.length; len++) {
    for (let from = 0; from + len < nums.length; from++) {
      const to = from + len;
      dp[from][to] = len
        ? Math.max(nums[from] - dp[from + 1][to], nums[to] - dp[from][to - 1])
        : nums[from];
    }
  }

  return dp[0][nums.length - 1] >= 0;
};
