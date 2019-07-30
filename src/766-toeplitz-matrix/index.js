export const isToeplitzMatrix = matrix => {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] !== matrix[i][j]) {
        return false;
      }
    }
  }

  return true;
};
