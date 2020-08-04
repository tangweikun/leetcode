/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = Array.from({ length: days.length + 1 }, () => 0);
  let pos = 0;

  for (let i = 1; i <= days[days.length - 1]; i++) {
    if (i === days[pos]) {
      dp[i] = Math.min(
        ~~dp[i - 1] + costs[0],
        ~~dp[i - 7] + costs[1],
        ~~dp[i - 30] + costs[2]
      );
      pos++;
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[dp.length - 1];
};
