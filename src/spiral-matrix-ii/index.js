// HELP:

export const generateMatrix = n => {
  const res = Array.from({ length: n }, _ => Array(n).fill(0));

  let rowU = 0;
  let rowD = n - 1;
  let colL = 0;
  let colR = n - 1;
  let fill = 1; // used to fill matrix, will be updated after each fill

  while (rowU <= rowD && colL <= colR) {
    // fill top row
    for (let i = colL; i <= colR; i++) {
      res[rowU][i] = fill++;
    }
    rowU++;

    // fill right col
    for (let i = rowU; i <= rowD; i++) {
      res[i][colR] = fill++;
    }
    colR--;

    // fill bottom row
    if (rowU <= rowD) {
      for (let i = colR; i >= colL; i--) {
        res[rowD][i] = fill++;
      }
      rowD--;
    }

    // fill left col
    if (colL <= colR) {
      for (let i = rowD; i >= rowU; i--) {
        res[i][colL] = fill++;
      }
      colL++;
    }
  }

  return res;
};
