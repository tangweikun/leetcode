/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  let res = 0;
  let map = new Map();
  let p = 0;
  let temp = '';

  for (let r of matrix) {
    p = 1 ^ r[0];
    for (let i = 0; i < r.length; i++) r[i] = r[i] ^ p;
    temp = r.join('');
    if (map.has(temp)) {
      map.set(temp, map.get(temp) + 1);
    } else {
      map.set(temp, 1);
    }

    res = Math.max(res, map.get(temp));
  }
  return res;
};
