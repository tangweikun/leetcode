/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  const map = new Map();
  let start = 0;
  let res = 0;

  for (let end = 0; end < len; end++) {
    if (map.has(s[end])) {
      start = Math.max(map.get(s[end]), start);
    }
    res = Math.max(res, end - start + 1);
    map.set(s[end], end + 1);
  }

  return res;
};
