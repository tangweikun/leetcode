// HELP:

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  const map = {};
  const N = A.length;
  const dp = [...Array(N)].map(r => Array(N).fill(2));

  let max = 0;
  for (let i = 0; i < N; i++) {
    map[A[i]] = i;
    for (let j = 0; j < i; j++) {
      if (A[i] - A[j] < A[j] && A[i] - A[j] in map) {
        dp[j][i] = Math.max(dp[j][i], 1 + dp[map[A[i] - A[j]]][j]);
      }
      max = Math.max(max, dp[j][i]);
    }
  }
  return max === 2 ? 0 : max;
};
