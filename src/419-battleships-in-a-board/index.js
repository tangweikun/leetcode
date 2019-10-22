// HELP:

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'X') {
        if (
          ((row < board.length - 1 && board[row + 1][col] === '.') ||
            row === board.length - 1) &&
          ((col < board[0].length - 1 && board[row][col + 1] === '.') ||
            col === board[0].length - 1)
        ) {
          count++;
        }
      }
    }
  }

  return count;
};
