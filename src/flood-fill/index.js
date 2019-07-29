export const floodFill = function(image, sr, sc, newColor) {
  const color = image[sr][sc];
  if (color !== newColor) {
    dfs(sr, sc);
  }
  return image;

  function dfs(x, y) {
    if (image[x] && image[x][y] === color) {
      image[x][y] = newColor;
      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);
    }
  }
};
