// Bruce Force
/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  let res = 0;

  for (let i = 0; i < A.length; i++) {
    let j = A.length - 1;
    while (A[j] < A[i]) {
      j--;
    }
    res = Math.max(res, j - i);
  }

  return res;
};
