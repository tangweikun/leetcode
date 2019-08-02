/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */

var allCellsDistOrder = function(R, C, r0, c0) {
  const distances = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const d = Math.abs(r0 - i) + Math.abs(c0 - j);

      if (distances[d]) distances[d].push([i, j]);
      else distances[d] = [[i, j]];
    }
  }

  return [].concat(...distances);
};
