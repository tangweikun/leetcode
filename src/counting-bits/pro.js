export function countBits(num) {
  let dp = Array(num + 1).fill(0);
  for (let i = 1; i < num + 1; i++) {
    dp[i] = dp[i >> 1] + (1 & i);
  }
  return dp;
}
