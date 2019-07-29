export function integerBreak(n) {
  if (n <= 3) return n - 1;

  let res = 1;
  while (n > 4) {
    res *= 3;
    n -= 3;
  }

  return res * n;
}
