// HELP:
// Dynamic Programming
// Complexity O(N²)

export function findLongestChain(pairs) {
  pairs.sort((x, y) => x[0] - y[0]);
  let dp = Array(pairs.length).fill(1);

  for (let j = 1; j < pairs.length; j++) {
    for (let i = 0; i < j; i++) {
      if (pairs[i][1] < pairs[j][0]) dp[j] = Math.max(dp[j], dp[i] + 1);
    }
  }

  return dp[dp.length - 1];
}
