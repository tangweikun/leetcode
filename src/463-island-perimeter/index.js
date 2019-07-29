export function islandPerimeter(grid) {
  let sum = 0;

  for (let h = 0; h < grid.length; h++) {
    for (let w = 0; w < grid[h].length; w++) {
      if (grid[h][w]) {
        sum += 4;
        if (grid[h][w + 1]) {
          sum -= 2;
        }
        if (grid[h + 1] && grid[h + 1][w]) {
          sum -= 2;
        }
      }
    }
  }

  return sum;
}
