export function numMagicSquaresInside(grid) {
  let res = 0;
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      let guard = true;
      for (let m = i; m < i + 3; m++) {
        for (let n = j; n < j + 3; n++) {
          if (grid[m][n] < 1 || grid[m][n] > 9) guard = false;
        }
      }

      if (guard) {
        const columnSum1 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
        const columnSum2 =
          grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2];
        const columnSum3 =
          grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];

        const rowSum1 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j];
        const rowSum2 =
          grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1];
        const rowSum3 =
          grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2];

        const diagonalSum1 =
          grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
        const diagonalSum2 =
          grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j];

        if (
          columnSum1 === columnSum2 &&
          columnSum2 === columnSum3 &&
          columnSum3 === rowSum1 &&
          rowSum1 === rowSum2 &&
          rowSum2 === rowSum3 &&
          rowSum3 === diagonalSum1 &&
          diagonalSum1 === diagonalSum2 &&
          diagonalSum2 === 15
        ) {
          res++;
        }
      }
    }
  }

  return res;
}
