export function isUgly(num: number) {
  if (num <= 0) return false

  for (let divisor of [2, 3, 5]) {
    while (num % divisor === 0) {
      num /= divisor
    }
  }

  return num === 1
}
