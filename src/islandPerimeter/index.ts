export function islandPerimeter(grid: [number][]) {
  let sum = 0
  const width = grid[0].length
  const height = grid.length

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (grid[h] && grid[h][w]) {
        sum += 4
        if (grid[h][w + 1]) {
          sum -= 2
        }
        if (grid[h + 1] && grid[h + 1][w]) {
          sum -= 2
        }
      }
    }
  }

  return sum
}
