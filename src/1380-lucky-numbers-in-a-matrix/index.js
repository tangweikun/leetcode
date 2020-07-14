/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const hash = {};
  const res = [];

  for (let i = 0; i < m; i++) {
    let min = Infinity;
    for (let j = 0; j < n; j++) {
      min = Math.min(min, matrix[i][j]);
    }

    hash[min] = true;
  }

  for (let i = 0; i < n; i++) {
    let max = -Infinity;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, matrix[j][i]);
    }

    if (hash[max]) {
      res.push(max);
    }
  }

  return res;
};
