// HELP:

export function minSteps(n) {
  let ans = 0;
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      ans += d;
      n /= d;
    }
    d++;
  }
  return ans;
}
