export function pow(x, n) {
  const isNegative = n < 0 ? ((n *= -1), true) : false;
  let ans = 1;

  while (n > 0) {
    ans *= x;
    n--;
  }

  return isNegative ? 1 / ans : ans;
}
