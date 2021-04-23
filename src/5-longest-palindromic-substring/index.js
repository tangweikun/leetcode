/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let start = 0;
  let end = 0;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i > end - start) {
        start = i;
        end = j;
      }
    }
  }

  return s.slice(start, end + 1);
};
