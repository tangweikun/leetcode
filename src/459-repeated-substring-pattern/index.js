/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i <= s.length / 2; i++) {
    if (s.slice(0, i).repeat(s.length / i) === s) {
      return true;
    }
  }

  return false;
};
