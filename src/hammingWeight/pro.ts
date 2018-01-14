export function hammingWeight(num: number) {
  return num.toString(2).replace(/0/g, '').length
}
