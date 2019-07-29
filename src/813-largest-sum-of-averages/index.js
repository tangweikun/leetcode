// HELP:

export function largestSumOfAverages(A, K) {
  const len = A.length;
  const S = Array(len + 1).fill(0);
  const dp = Array(len);

  for (let i = 0; i < len; i++) S[i + 1] = S[i] + A[i];

  for (let i = 0; i < len; i++) dp[i] = (S[len] - S[i]) / (len - i);

  for (let i = 0; i < K - 1; i++) {
    for (let j = 0; j < len; j++) {
      for (let m = j + 1; m < len; m++) {
        dp[j] = Math.max(dp[j], (S[m] - S[j]) / (m - j) + dp[m]);
      }
    }
  }

  return dp[0];
}
