export function isPowerOfFour(num: number) {
  return Number.isInteger(0.5 * Math.log2(num))

  // return Number.isInteger(Math.log10(num) / Math.log10(4))
}
