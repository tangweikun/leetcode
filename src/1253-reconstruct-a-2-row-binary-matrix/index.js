/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
  const row1 = [];
  const row2 = [];

  for (let i = 0; i < colsum.length; i++) {
    if (colsum[i] === 2) {
      row1[i] = 1;
      row2[i] = 1;
      upper--;
      lower--;
      continue;
    }

    if (colsum[i] === 0) {
      row1[i] = 0;
      row2[i] = 0;
      continue;
    }

    if (upper > lower) {
      row1[i] = 1;
      row2[i] = 0;
      upper--;
    } else {
      row1[i] = 0;
      row2[i] = 1;
      lower--;
    }
  }

  if (lower !== 0 || upper !== 0) {
    return [];
  }

  return [row1, row2];
};
