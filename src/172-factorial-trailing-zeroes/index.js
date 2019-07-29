// HELP:

export function trailingZeroes(n) {
  let ans = 0;

  while (n) {
    ans += ~~(n / 5);
    n /= 5;
  }

  return ans;
}
