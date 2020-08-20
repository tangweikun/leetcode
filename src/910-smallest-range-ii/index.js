/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
  A.sort((x, y) => x - y);
  const len = A.length;
  let res = A[len - 1] - A[0];

  for (let i = 0; i < len - 1; i++) {
    const max = Math.max(A[i] + K, A[len - 1] - K);
    const min = Math.min(A[0] + K, A[i + 1] - K);
    const diff = max - min;
    res = Math.min(res, diff);
  }

  return res;
};
