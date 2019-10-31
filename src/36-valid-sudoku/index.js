/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    const hash = {};
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== '.') {
        if (hash[num]) return false;
        hash[num] = true;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    const hash = {};
    for (let j = 0; j < 9; j++) {
      const num = board[j][i];
      if (num !== '.') {
        if (hash[num]) return false;
        hash[num] = true;
      }
    }
  }

  for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
      const hash = {};
      for (let i = 3 * m; i < 3 * m + 3; i++) {
        for (let j = 3 * n; j < 3 * n + 3; j++) {
          const num = board[i][j];
          if (num !== '.') {
            if (hash[num]) return false;
            hash[num] = true;
          }
        }
      }
    }
  }

  return true;
};
