export function bitCount(num) {
  let count = 0;
  for (; num > 0; count++) {
    num &= num - 1;
  }
  return count;
}
