export function isPowerOfThree(num) {
  return Number.isInteger(Math.log10(num) / Math.log10(3));
}
