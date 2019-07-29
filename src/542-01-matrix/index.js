// TODO:

export const updateMatrix = matrix => {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res[i].push(0);
      if (matrix[i][j] === 1) {
        let distance = Infinity;
        for (let m = 0; m < matrix.length; m++) {
          for (let n = 0; n < matrix[0].length; n++) {
            if (matrix[m][n] === 0) {
              distance = Math.min(distance, Math.abs(i - m) + Math.abs(j - n));
              res[i][j] = distance;
            }
          }
        }
      }
    }
  }

  return res;
};
