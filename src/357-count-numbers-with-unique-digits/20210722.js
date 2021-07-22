/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 10;
  const dp = [0, 10];
  for (let i = 2; i <= n; i++) {
    let sum = Array(i - 1)
      .fill(0)
      .reduce((acc, _, index) => acc * Math.max(9 - index, 1), 9);

    dp[i] = dp[i - 1] + sum;
  }

  return dp[n];
};
