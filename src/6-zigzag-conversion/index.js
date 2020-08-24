/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const res = [];
  let x = 0;
  let y = 0;
  let direction = 'DOWN';

  for (let i = 0; i < s.length; i++) {
    if (!res[y]) {
      res[y] = '';
    }
    res[y] += s[i];

    if (direction === 'DOWN') {
      if (y + 1 === numRows) {
        x++;
        y--;
        direction = 'RIGHT_UP';
      } else {
        y++;
      }

      continue;
    }

    if (direction === 'RIGHT_UP') {
      if (y === 0) {
        direction = 'DOWN';
        y++;
      } else {
        x++;
        y--;
      }

      continue;
    }
  }

  return res.reduce((acc, x) => acc + x, '');
};
convert('AB', 1);
