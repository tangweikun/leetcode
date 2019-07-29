// Approach: Dynamic Programming
// Time Complexity O(N)
// Space Complexity O(N)

export function getClimbingWays(num) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[num];
}
