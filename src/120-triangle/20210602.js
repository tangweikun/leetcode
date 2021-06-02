/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = Array(triangle.length);

  for (let i = 0; i < triangle.length; i++) {
    dp[i] = [];
    for (let j = 0; j < i + 1; j++) {
      if (i === 0) {
        dp[i][j] = Number(triangle[i][j]);
        continue;
      }
      if (j === 0) {
        dp[i][j] = ~~dp[i - 1][j] + Number(triangle[i][j]);
        continue;
      }
      if (j === i) {
        dp[i][j] = ~~dp[i - 1][j - 1] + Number(triangle[i][j]);
        continue;
      }
      dp[i][j] =
        Math.min(~~dp[i - 1][j - 1], ~~dp[i - 1][j]) + Number(triangle[i][j]);
    }
  }

  return Math.min(...dp[triangle.length - 1]);
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
