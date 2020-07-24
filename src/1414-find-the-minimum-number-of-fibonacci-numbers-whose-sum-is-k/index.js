/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 2;
  let i = 1;
  while (true) {
    if (dp[i] >= k) {
      break;
    }
    i++;
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  let times = 0;
  while (k) {
    while (dp[i] > k) {
      i--;
    }
    k -= dp[i];
    times++;
  }
  return times;
};
