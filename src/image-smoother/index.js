export const imageSmoother = function(M) {
  const R = M.length;
  const C = M[0].length;
  const res = Array.from({ length: R }, () => Array(C).fill(0));

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      let counter = 0;
      for (let nr = r - 1; nr <= r + 1; nr++) {
        for (let nc = c - 1; nc <= c + 1; nc++) {
          if (0 <= nr && nr < R && 0 <= nc && nc < C) {
            res[r][c] += M[nr][nc];
            counter++;
          }
        }
      }
      res[r][c] = Math.floor(res[r][c] / counter);
    }
  }

  return res;
};
