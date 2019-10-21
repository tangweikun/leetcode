// HELP:

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  const rowLength = A.length;
  const colLength = A[0].length;
  let res = rowLength * Math.pow(2, colLength - 1);

  for (let colIndex = 1; colIndex < colLength; colIndex++) {
    let zero = 0;
    let one = 0;
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
      A[rowIndex][colIndex] = A[rowIndex][colIndex] ^ A[rowIndex][0];
      if (A[rowIndex][colIndex] === 0) zero++;
      if (A[rowIndex][colIndex] === 1) one++;
    }
    res += Math.max(zero, one) * Math.pow(2, colLength - 1 - colIndex);
  }

  return res;
};
