// HELP:

export const numIslands = grid => {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        res++;
        scanIsland(grid, i, j);
      }
    }
  }
  return res;
};

function scanIsland(grid, i, j) {
  grid[i][j] = '0';
  const fourDirections = [
    { x: i - 1, y: j },
    { x: i + 1, y: j },
    { x: i, y: j - 1 },
    { x: i, y: j + 1 },
  ];
  fourDirections.forEach(({ x, y }) => {
    if (grid[x] && grid[x][y] === '1') scanIsland(grid, x, y);
  });
}
