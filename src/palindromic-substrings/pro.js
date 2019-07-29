// Time Complexity: O(N^2)
// Space Complexity: O(1)
// HELP:

export const countSubstrings = s => {
  let sum = 0;
  let N = s.length;

  for (let center = 0; center < 2 * N - 1; center++) {
    let left = center / 2;
    let right = left + (center % 2);
    while (left >= 0 && right < N && s.charAt(left) === s.charAt(right)) {
      sum++;
      left--;
      right++;
    }
  }

  return sum;
};
