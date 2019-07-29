export function hasAlternatingBits(num) {
  let num1 = num;
  let num2 = num;

  let i = 0;
  let j = 1;

  while (num1 > 0) {
    num1 -= Math.pow(2, i);
    i += 2;
  }
  if (num1 === 0) return true;

  while (num2 > 0) {
    num2 -= Math.pow(2, j);
    j += 2;
  }

  return num2 === 0;
}
