const setZeroes = (matrix) => {
  const zeroesI = [];
  const zeroesJ = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroesI.push(i);
        zeroesJ.push(j);
      }
    }
  }

  for (let n of zeroesI) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[n][j] = 0;
    }
  }

  for (let n of zeroesJ) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][n] = 0;
    }
  }

  return matrix;
};
