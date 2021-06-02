// Approach: Fibonacci Number
// Time Complexity O(N)
// Space Complexity O(1)

// Approach: Fibonacci Number
// Time Complexity O(N)
// Space Complexity O(1)

function getClimbingWays(numOfStairs) {
  const dp = Array(numOfStairs).fill(0);
  for (let i = 0; i < numOfStairs; i++) {
    if (i < 2) {
      dp[i] = i + 1;
      continue;
    }
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[numOfStairs - 1];
}
