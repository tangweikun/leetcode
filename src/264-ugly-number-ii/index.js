// HELP:

function nthUglyNumber(num) {
  let dp = [1];
  let [two, three, five] = [0, 0, 0];

  for (let i = 1; i < num; i++) {
    dp[i] = Math.min(dp[two] * 2, dp[three] * 3, dp[five] * 5);
    if (dp[i] === dp[two] * 2) two++;
    if (dp[i] === dp[three] * 3) three++;
    if (dp[i] === dp[five] * 5) five++;
  }

  return dp[num - 1];
}
