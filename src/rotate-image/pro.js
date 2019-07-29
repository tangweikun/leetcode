export const rotate = matrix => {
  const N = matrix.length;

  for (let r = 0; r < N >> 1; r++) {
    [matrix[r], matrix[N - 1 - r]] = [matrix[N - 1 - r], matrix[r]];
  }
  for (let r = 0; r < N; r++) {
    for (let c = r + 1; c < N; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  return matrix;
};
