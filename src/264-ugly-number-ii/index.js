// HELP:

export function nthUglyNumber(num) {
  let dp = [1];
  let [a, b, c] = [0, 0, 0];

  for (let i = 1; i < num; i++) {
    dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
    if (dp[i] === dp[a] * 2) a++;
    if (dp[i] === dp[b] * 3) b++;
    if (dp[i] === dp[c] * 5) c++;
  }

  return dp[num - 1];
}
