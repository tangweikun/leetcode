// HELP:

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
  let arr = new Array(A.length + 1);
  for (let i = 0; i <= A.length; i++) {
    arr[i] = new Array(B.length + 1).fill(0);
  }

  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        arr[i][j] = 1 + arr[i - 1][j - 1];
      } else {
        arr[i][j] = Math.max(arr[i][j - 1], arr[i - 1][j]);
      }
    }
  }
  return arr[A.length][B.length];
};
