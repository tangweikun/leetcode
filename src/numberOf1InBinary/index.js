export function numberOf1InBinary(num, total = 1) {
  if (num === 0) return 0
  if (num === 1) return total
  if (num % 2) {
    return numberOf1InBinary((num - 1) / 2, total + 1)
  }
  return numberOf1InBinary(num / 2, total)
}
