// Approach: Dynamic Programming
// Time Complexity O(N)
// Space Complexity O(N)

export function getClimbingWays(num: number) {
  if (num === 1) return 1
  const dp = new Array(num + 1)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[num]
}
