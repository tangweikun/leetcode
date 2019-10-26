/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((x, y) => y - x);

  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (A[i] < A[j] + A[k]) {
          return A[i] + A[j] + A[k];
        }
      }
    }
  }

  return 0;
};
