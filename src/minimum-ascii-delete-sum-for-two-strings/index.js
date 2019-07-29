// HELP:

export const minimumDeleteSum = (s1, s2) => {
  let dp = Array.from({ length: s1.length + 1 }, _ => []);

  dp[0][0] = 0;
  for (let i = 0; i < s2.length; i++) {
    dp[0][i + 1] = dp[0][i] + s2.charCodeAt(i);
  }

  for (let i = 0; i < s1.length; i++) {
    dp[i + 1][0] = dp[i][0] + s1.charCodeAt(i);
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      } else {
        dp[i + 1][j + 1] = Math.min(
          dp[i][j + 1] + s1.charCodeAt(i),
          dp[i + 1][j] + s2.charCodeAt(j),
        );
      }
    }
  }

  return dp[s1.length][s2.length];
};
