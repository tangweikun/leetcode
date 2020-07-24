/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  const hash = {};
  for (let char of s) {
    hash[char] = ~~hash[char] + 1;
  }

  let count = 0;
  for (let n of Object.values(hash)) {
    count += n % 2;
  }

  return k >= count && s.length >= k;
};
