export function isPerfectSquare(num) {
  let i = 1;

  while (i * i < num) {
    i++;
  }

  return i * i === num;
}
