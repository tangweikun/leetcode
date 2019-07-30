export const spiralOrder = matrix => {
  let res = [];
  const row = matrix.length;
  if (!Array.isArray(matrix[0])) return matrix;

  const column = matrix[0].length;

  let rowStart = 0;
  let rowEnd = row - 1;
  let columnStart = 0;
  let columnEnd = column - 1;

  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    for (let i = columnStart; i <= columnEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let j = rowStart; j <= rowEnd; j++) {
      res.push(matrix[j][columnEnd]);
    }
    columnEnd--;

    if (rowStart <= rowEnd) {
      for (let m = columnEnd; m >= columnStart; m--) {
        res.push(matrix[rowEnd][m]);
      }
      rowEnd--;
    }

    if (columnStart <= columnEnd) {
      for (let n = rowEnd; n >= rowStart; n--) {
        res.push(matrix[n][columnStart]);
      }
      columnStart++;
    }
  }

  return res;
};
