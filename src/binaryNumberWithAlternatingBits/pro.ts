export function hasAlternatingBits(num: number) {
  const binary = num.toString(2)

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === binary[i + 1]) return false
  }

  return true
}
