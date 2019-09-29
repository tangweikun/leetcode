/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) return 0;
  if (N <= 2) return 1;
  const dp = [0, 1, 1];
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
};
