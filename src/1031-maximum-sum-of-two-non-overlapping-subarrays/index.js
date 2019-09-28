/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  let max = 0;
  let sumL = 0;
  let sumM = 0;

  for (let i = 0; i < A.length - L + 1; i++) {
    sumL = A.slice(i, L + i).reduce((acc, n) => acc + n, 0);
    let j = 0;
    while (j < i && i - j >= M) {
      sumM = A.slice(j, j + M).reduce((acc, n) => acc + n, 0);
      max = Math.max(max, sumL + sumM);
      j++;
    }

    j = L + i;
    while (A.length - j >= M) {
      sumM = A.slice(j, j + M).reduce((acc, n) => acc + n, 0);
      max = Math.max(max, sumL + sumM);
      j++;
    }
  }

  return max;
};

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2));
console.log(
  maxSumTwoNoOverlap(
    [12, 8, 12, 18, 19, 10, 17, 20, 6, 8, 13, 1, 19, 11, 5],
    3,
    6,
  ),
);
