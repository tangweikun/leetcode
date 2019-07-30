export const setZeroes = matrix => {
  const helper = Array.from({ length: matrix.length }, _ =>
    Array(matrix[0].length).fill(1),
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) helper[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (helper[i][j] === 0) {
        matrix[i].fill(0);
        for (let n = 0; n < matrix.length; n++) {
          matrix[n][j] = 0;
        }
      }
    }
  }

  return matrix;
};
