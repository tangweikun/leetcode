/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs = costs.sort((a, b) => a[0] - a[1] - b[0] + b[1]);
  let ans = 0;
  let N = costs.length;
  for (let i = 0; i < N / 2; i++) {
    ans += costs[i][0];
    ans += costs[N - 1 - i][1];
  }

  return ans;
};
