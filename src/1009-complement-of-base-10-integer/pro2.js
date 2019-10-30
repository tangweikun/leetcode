/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return Math.pow(2, N.toString(2).length) - 1 - N;
};
