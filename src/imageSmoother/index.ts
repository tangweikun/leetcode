export const imageSmoother = function(M: number[][]) {
  const R = M.length
  const C = M[0].length
  let res = Array()

  for (let i = 0; i < R; i++) {
    res[i] = Array()
    for (let j = 0; j < C; j++) {
      res[i][j] = 0
    }
  }

  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      let count = 0
      for (let nr = r - 1; nr <= r + 1; ++nr) {
        for (let nc = c - 1; nc <= c + 1; ++nc) {
          if (0 <= nr && nr < R && 0 <= nc && nc < C) {
            res[r][c] += M[nr][nc]
            count++
          }
        }
      }
      res[r][c] = Math.floor(res[r][c] / count)
    }
  }

  return res
}
