/**
 * @param {string} s
 * @return {number}
 */
// HELP:
var numSteps = function (s) {
  let flag = 0;
  let res = s.length - 1;
  let r = s.length;

  while (--r != 0) {
    if (flag != s[r]) {
      flag = 1;
      res += flag;
    }
  }

  return flag + res;
};
