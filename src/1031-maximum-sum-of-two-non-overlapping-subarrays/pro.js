// HELP:

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */

var maxSumTwoNoOverlap = function(A, L, M) {
  let len = A.length;
  for (let i = 1; i < len; i++) {
    A[i] += A[i - 1];
  }

  let LMax = A[L - 1];
  let MMax = A[M - 1];
  let res = A[M + L - 1];
  for (let i = M + L; i < len; i++) {
    // update LMax to i - M;
    LMax = Math.max(LMax, A[i - M] - A[i - M - L]);
    MMax = Math.max(MMax, A[i - L] - A[i - M - L]);
    res = Math.max(res, LMax + A[i] - A[i - M], MMax + A[i] - A[i - L]);
  }
  return res;
};
