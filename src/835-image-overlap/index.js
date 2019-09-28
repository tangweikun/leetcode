// HELP:
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
  const sz = A.length;
  let res = 0;

  for (let i = 0; i < sz; i++) {
    for (let j = 0; j < sz; j++) {
      const r = sz - i;
      const c = sz - j;
      let sum1 = 0;
      let sum2 = 0;
      for (let k = 0; k < r; k++) {
        for (let m = 0; m < c; m++) {
          sum1 += A[k][m] * B[k + i][m + j];
          sum2 += B[k][m] * A[k + i][m + j];
        }
      }
      res = Math.max(res, sum1, sum2);
    }
  }
  return res;
};
