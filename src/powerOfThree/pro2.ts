export function isPowerOfThree(num: number) {
  return Number.isInteger(Math.log10(num) / Math.log10(3))
}
