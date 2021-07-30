/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let start = 0;
  for (let char of s) {
    let flag = false;
    for (let i = start; i < t.length; i++) {
      if (char === t[i]) {
        start = i + 1;
        flag = true;
        break;
      }
    }

    if (!flag) return false;
  }

  return true;
};
