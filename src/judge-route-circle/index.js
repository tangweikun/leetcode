export function judgeCircle(moves) {
  let x = 0;
  let y = 0;

  for (let char of moves) {
    x += ~~(char === 'U') - ~~(char === 'D');
    y += ~~(char === 'R') - ~~(char === 'L');
  }

  return x === 0 && y === 0;
}
