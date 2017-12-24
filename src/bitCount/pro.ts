export function bitCount(num: number): number {
  let count: number = 0
  while (num > 0) {
    count += num & 1
    num >>= 1
  }

  return count
}
