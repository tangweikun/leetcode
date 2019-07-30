// HELP:

export const countSubstrings = s => {
  let count = 0;
  let dp = Array.from(Array(s.length), _ => Array(s.length).fill(false));

  for (let end = 0; end < s.length; end++) {
    for (let start = 0; start <= end; start++) {
      if (
        s.charAt(start) === s.charAt(end) &&
        (start > end - 2 || dp[start + 1][end - 1])
      ) {
        dp[start][end] = true;
        count++;
      }
    }
  }

  return count;
};
