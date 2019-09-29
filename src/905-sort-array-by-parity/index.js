/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length - 1;

  while (i < j) {
    if (A[i] % 2 === 0) {
      i++;
      continue;
    }
    if (A[j] % 2 !== 0) {
      j--;
      continue;
    }

    [A[i], A[j]] = [A[j], A[i]];
    i++;
    j--;
  }

  return A;
};
