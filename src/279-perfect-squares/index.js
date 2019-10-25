// HELP:

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = [...Array(n + 1)].map(_ => 0);
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 最坏的情况就是每次+1
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
    }
  }

  return dp[n];
};
