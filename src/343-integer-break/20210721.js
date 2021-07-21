/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = Array(n + 1).fill(1);

  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }

  return dp[n];
};
