// HELP:

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  let length = piles.length;
  let dp = Array.from({ length: length + 1 }, () =>
    new Array(length + 1).fill(0),
  );
  for (let i = 0; i < length; i++) {
    dp[i][i] = piles[i];
  }
  for (let i = 1; i < length; ++i) {
    for (let j = 0; j < length - i; ++j) {
      dp[j][j + i] = Math.max(
        piles[j] - dp[j + 1][j + i],
        piles[j + i] - dp[j][j + i - 1],
      );
    }
  }
  return dp[0][length - 1] > 0;
};
