/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const sum1 = A.reduce((prev, next) => prev + next);
  const sum2 = B.reduce((prev, next) => prev + next);
  const gap = (sum1 - sum2) / 2;
  for (let i = 0; i < A.length; i++) {
    if (B.includes(A[i] - gap)) {
      return [A[i], A[i] - gap];
    }
  }
};
