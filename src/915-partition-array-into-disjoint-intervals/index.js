/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function (A) {
  const max = [];
  const min = [];
  for (let i = 0; i < A.length; i++) {
    max[i] = Math.max(~~max[i - 1], A[i]);
  }
  for (let i = A.length - 1; i >= 0; i--) {
    min[i] = Math.min(min[i + 1] === undefined ? Infinity : min[i + 1], A[i]);
  }

  for (let i = 0; i < A.length; i++) {
    if (max[i] <= min[i + 1]) {
      return i + 1;
    }
  }
};
