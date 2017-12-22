export function numberOf1InBinary(num) {
  let count = 0
  while (num > 0) {
    if ((num & 1) === 1) count++
    num >>= 1
  }

  return count
}
