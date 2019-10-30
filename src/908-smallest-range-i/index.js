/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  const min = Math.min(...A);
  const max = Math.max(...A);
  return Math.max(0, max - min - 2 * K);
};
