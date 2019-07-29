// HELP:

export const rotate = matrix => {
  const N = matrix.length;

  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let m = 0; m < N; m++) {
    for (let n = 0; n < N / 2; n++) {
      [matrix[m][n], matrix[m][N - 1 - n]] = [
        matrix[m][N - 1 - n],
        matrix[m][n],
      ];
    }
  }

  return matrix;
};
