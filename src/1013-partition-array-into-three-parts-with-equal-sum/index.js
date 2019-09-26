/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((acc, n) => acc + n, 0);
  const target = sum / 3;
  let current = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    current += A[i];
    if (current === target) {
      count++;
      current = 0;
    }
    if (count === 2) {
      return true;
    }
  }

  return false;
};
