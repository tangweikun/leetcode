// HELP:

export function trailingZeroes(n) {
  let res = 0;
  let f = 1;

  while (f * 5 <= n) {
    f *= 5;
    res += parseInt(n / f);
  }

  return res;
}
