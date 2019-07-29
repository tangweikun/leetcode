export function minCostClimbingStairs(cost) {
  let f1 = 0;
  let f2 = 0;

  for (let i = 0; i < cost.length; i++) {
    const f0 = cost[i] + Math.min(f1, f2);
    f2 = f1;
    f1 = f0;
  }

  return Math.min(f1, f2);
}
