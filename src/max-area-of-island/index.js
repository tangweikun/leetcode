export const maxAreaOfIsland = grid => {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        ans = Math.max(ans, dfs(i, j));
      }
    }
  }
  return ans;

  function dfs(i, j) {
    if (grid[i] && grid[i][j] === 1) {
      grid[i][j] = 0;
      return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 1;
    }

    return 0;
  }
};
