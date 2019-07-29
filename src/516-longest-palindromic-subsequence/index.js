// HELP:

export function longestPalindromeSubseq(s) {
  let dp = Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    dp[i] = 1;
    let prev = 0;

    for (let j = i - 1; j >= 0; j--) {
      const temp = dp[j];
      if (s.charAt(i) === s.charAt(j)) {
        dp[j] = 2 + prev;
      } else {
        dp[j] = Math.max(dp[j + 1], dp[j]);
      }
      prev = temp;
    }
  }

  return dp[0];
}
