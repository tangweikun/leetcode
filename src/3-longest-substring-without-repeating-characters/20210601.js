/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let start = 0;
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(start, map.get(s[i]));
    }
    res = Math.max(res, i - start + 1);
    map.set(s[i], i + 1);
  }

  return res;
};
