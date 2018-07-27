export function reverseBits(num: number) {
  let count = 32
  let result = 0

  while (count--) {
    result *= 2
    result += num & 1
    num >>= 1
  }

  return result
}
