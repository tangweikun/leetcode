// HELP:

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
  let len = A.length;
  let dp = new Array(len + 1).fill(0);

  for (let i = 1; i < len + 1; i++) {
    let min = Number.MIN_VALUE;
    for (let j = 1; j < Math.min(i, K) + 1; j++) {
      min = Math.max(min, A[i - j]);
      dp[i] = Math.max(dp[i], dp[i - j] + min * j);
    }
  }

  return dp[len];
};
