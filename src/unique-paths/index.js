// export function uniquePaths(m: number, n: number): any {
//   if (m === 1 || n === 1) return 1

//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
// }

// HELP:
export function uniquePaths(m, n) {
  let currentRow = Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    for (let column = 1; column < n; column++) {
      currentRow[column] += currentRow[column - 1];
    }
  }

  return currentRow[n - 1];
}
