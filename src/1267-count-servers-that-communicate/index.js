/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const arrX = [];
  const arrY = [];
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    arrX[i] = 0;
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        arrX[i]++;
      }
    }
  }

  for (let i = 0; i < grid[0].length; i++) {
    arrY[i] = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 1) {
        arrY[i]++;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && (arrX[i] > 1 || arrY[j] > 1)) {
        res++;
      }
    }
  }

  return res;
};

countServers([
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]);

countServers([
  [1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
]);
