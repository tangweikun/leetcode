// HELP:
export function getSum(a, b) {
  while (b) {
    let t = a;
    a ^= b;
    b = (b & t) << 1;
  }

  return a;
}
