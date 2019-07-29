// HELP:
export function uniquePaths(m, n) {
  let dp = Array(m).fill(Array(n).fill(1));

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
    }
  }

  return dp[0][0];
}
