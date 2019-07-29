// Time Complexity O(n)
// Space Complexity O(1)

export function countBinarySubstrings(str) {
  let curr = 1;
  let prev = 0;
  let ans = 0;

  for (var i = 1; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i - 1)) {
      curr++;
    } else {
      prev = curr;
      curr = 1;
    }

    if (prev >= curr) ans++;
  }

  return ans;
}
