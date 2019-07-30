// HELP:

export const minimumTotal = triangle => {
  let dp = [[triangle[0][0]]];
  for (let i = 2; i <= triangle.length; i++) {
    dp[1] = [];
    for (let j = 0; j < i; j++) {
      dp[1][j] = Math.min(
        j - 1 < 0 ? Number.MAX_VALUE : dp[0][j - 1] + triangle[i - 1][j],
        j === i - 1 ? Number.MAX_VALUE : dp[0][j] + triangle[i - 1][j],
      );
    }
    dp.shift();
  }
  return dp[0].reduce((pre, curr) => Math.min(pre, curr), Number.MAX_VALUE);
};
