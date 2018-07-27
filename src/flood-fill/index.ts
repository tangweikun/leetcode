export const floodFill = function(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
) {
  const color = image[sr][sc]
  if (color !== newColor) {
    dfs(sr, sc)
  }
  return image

  function dfs(x: number, y: number) {
    if (image[x] && image[x][y] === color) {
      image[x][y] = newColor
      dfs(x - 1, y)
      dfs(x + 1, y)
      dfs(x, y - 1)
      dfs(x, y + 1)
    }
  }
}
