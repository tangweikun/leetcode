/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  if (mat.length === 0) return mat;
  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    const pos = [];
    const nums = [];
    let x = i;
    let y = 0;

    while (x < m && y < n) {
      pos.push([x, y]);
      nums.push(mat[x][y]);
      x++;
      y++;
    }

    nums.sort((x, y) => x - y);
    for (let i = 0; i < nums.length; i++) {
      const row = pos[i][0];
      const column = pos[i][1];
      mat[row][column] = nums[i];
    }
  }

  for (let i = 1; i < n; i++) {
    const pos = [];
    const nums = [];
    let x = 0;
    let y = i;

    while (x < m && y < n) {
      pos.push([x, y]);
      nums.push(mat[x][y]);
      x++;
      y++;
    }

    nums.sort((x, y) => x - y);
    for (let i = 0; i < nums.length; i++) {
      const row = pos[i][0];
      const column = pos[i][1];
      mat[row][column] = nums[i];
    }
  }

  return mat;
};
