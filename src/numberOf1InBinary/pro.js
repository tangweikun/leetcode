export function numberOf1InBinary(num) {
  let count = 0
  while (num > 0) {
    count += num & 1
    num >>= 1
  }

  return count
}
