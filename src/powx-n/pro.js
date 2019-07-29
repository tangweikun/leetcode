export function pow(x, n) {
  const isNegative = n < 0 ? ((n *= -1), true) : false;

  let ans = 1;
  while (n > 0) {
    n & 1 && (ans *= x);
    x *= x;

    // We can't use `n >>= 1` here, when `n === 2147483648`,
    // `n >> 1` will get `-1073741824`
    // n /= 2
    n >>>= 1;
  }

  return isNegative ? 1 / ans : ans;
}
