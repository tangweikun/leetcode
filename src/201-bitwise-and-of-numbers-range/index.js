/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//  HELP:

var rangeBitwiseAnd = function (m, n) {
  while (m < n) {
    // 抹去最右边的 1
    n = n & (n - 1);
  }

  return n;
};
