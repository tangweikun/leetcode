/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
  let min = Infinity;
  let res = 0;

  for (let i = 0; i < A.length; i++) {
    min = A[i];

    for (let j = i; j < A.length; j++) {
      min = Math.min(min, A[j]);
      res += min;
    }
  }

  return res % (Math.pow(10, 9) + 7);
};
