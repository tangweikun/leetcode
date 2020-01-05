function longestPalindrome(s) {
  if (s == null || s === "") return "";

  let { length: n } = s;
  let start = 0,
    end = 0;
  let len, len1, len2, i;

  for (i = 0; i < n; ++i) {
    len1 = expandAroundCenter(i, i, s, n);
    len2 = expandAroundCenter(i, i + 1, s, n);
    len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - ~~((len - 1) / 2);
      end = i + ~~(len / 2);
    }
  }
  return s.substring(start, end + 1);
}

function expandAroundCenter(left, right, s, n) {
  let L = left,
    R = right;
  while (L > -1 && R < n && s[L] === s[R]) {
    L--;
    R++;
  }
  return R - L - 1;
}
