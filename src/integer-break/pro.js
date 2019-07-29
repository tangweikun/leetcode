export function integerBreak(n) {
  if (n < 4) return n - 1;
  if (n % 3 === 0) return Math.pow(3, ~~(n / 3));
  if ((n - 4) % 3 === 0) return Math.pow(3, ~~((n - 4) / 3)) * 4;
  return Math.pow(3, ~~(n / 3)) * (n % 3);
}
