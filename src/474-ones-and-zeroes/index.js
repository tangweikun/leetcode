/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  if (strs.length == 0) return 0;
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp.push([]);
    for (let j = 0; j <= n; j++) dp[i].push(0);
  }

  for (let item of strs) {
    let count0 = 0;
    let count1 = 0;
    for (let s of item) {
      if (s == '0') count0 += 1;
      else count1 += 1;
    }
    for (let i = m; i >= count0; i--) {
      for (let j = n; j >= count1; j--) {
        dp[i][j] = Math.max(1 + dp[i - count0][j - count1], dp[i][j]);
      }
    }
  }

  return dp[m][n];
};
