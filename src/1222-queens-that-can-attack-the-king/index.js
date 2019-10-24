/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
  let res = [];
  const queensMap = queens.map(arr => String(arr[0]) + String(arr[1]));
  let column = king[0];
  let row = king[1];

  let i = column - 1;
  let j = row - 1;
  while (i >= 0 && j >= 0) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    i--;
    j--;
  }

  i = column;
  j = row - 1;
  while (j >= 0) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    j--;
  }

  i = column + 1;
  j = row - 1;
  while (i < 8 && j >= 0) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    i++;
    j--;
  }

  i = column + 1;
  j = row;
  while (i < 8) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    i++;
  }

  i = column + 1;
  j = row + 1;
  while (i < 8 && j < 8) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    i++;
    j++;
  }

  i = column;
  j = row + 1;
  while (j < 8) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    j++;
  }

  i = column - 1;
  j = row + 1;
  while (i >= 0 && j < 8) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    i--;
    j++;
  }

  i = column - 1;
  j = row;
  while (i >= 0) {
    if (queensMap.includes(String(i) + String(j))) {
      res.push([i, j]);
      break;
    }
    i--;
  }

  return res;
};
