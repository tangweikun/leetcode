export function bitCount(num, total = 1) {
  if (num === 0) return 0;
  if (num === 1) return total;
  if (num % 2) {
    return bitCount((num - 1) / 2, total + 1);
  }
  return bitCount(num / 2, total);
}
