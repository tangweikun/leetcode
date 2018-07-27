export function isPowerOfThree(num: number) {
  if (num < 3) return num === 1

  while (num > 1) {
    if (num % 3) return false
    num /= 3
  }

  return true
}
