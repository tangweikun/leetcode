// HELP:

export function findLength(A, B) {
  let res = 0;
  let dp = Array(A.length + 1)
    .fill(0)
    .map(_ => Array(B.length + 1).fill(0));

  for (let i = A.length - 1; i >= 0; i--) {
    for (let j = B.length - 1; j >= 0; j--) {
      if (A[i] === B[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
        res = Math.max(res, dp[i][j]);
      }
    }
  }

  return res;
}
