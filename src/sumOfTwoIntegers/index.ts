// HELP:
export function getSum(a: number, b: number) {
  while (b) {
    let t = a
    a ^= b
    b = (b & t) << 1
  }

  return a
}
