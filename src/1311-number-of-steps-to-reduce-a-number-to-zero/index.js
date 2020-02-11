/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
  if (num < 3) return num;
  const dp = [0, 1, 2];
  let n = 3;
  while (n <= num) {
    if (n % 2 === 0) {
      dp[n] = 1 + dp[n / 2];
    } else {
      dp[n] = 1 + dp[n - 1];
    }
    n++;
  }

  return dp[num];
};
