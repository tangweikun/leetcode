export function minCostClimbingStairs(cost) {
  let dp = Array(cost.length + 1).fill(0);
  dp[1] = cost[0];
  dp[2] = cost[1];

  for (let i = 3; i < cost.length + 1; i++) {
    dp[i] = cost[i - 1] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[cost.length], dp[cost.length - 1]);
}
