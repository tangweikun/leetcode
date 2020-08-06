/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const dp = [];
  const sum = cardPoints.slice(-k).reduce((acc, n) => acc + n, 0);
  dp[0] = sum;
  let res = sum;

  for (let i = 1; i <= k; i++) {
    dp[i] =
      dp[i - 1] + cardPoints[i - 1] - cardPoints[cardPoints.length - k + i - 1];
    res = Math.max(res, dp[i]);
  }

  return res;
};

maxScore([100, 40, 17, 9, 73, 75], 3);
maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8);
