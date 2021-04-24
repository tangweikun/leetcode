var diagonalSum = function (mat) {
  const n = mat.length;
  const mid = Math.floor(n / 2);
  let sum = 0;

  // 逐行遍历，每行前后各经过一个
  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[i][n - 1 - i];
  }

  // 奇数方阵需要去除重复项
  return sum - mat[mid][mid] * (n & 1);
};
