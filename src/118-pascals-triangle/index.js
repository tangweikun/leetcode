export const generatePascalsTriangle = n => {
  let pos = 0;
  const res = [];

  while (pos < n) {
    const row = Array(pos + 1).fill(1);
    for (let j = 1; j < pos; j++) {
      row[j] = res[pos - 1][j - 1] + res[pos - 1][j];
    }
    res.push(row);
    pos++;
  }

  return res;
};
