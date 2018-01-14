export function hammingWeight(num: number) {
  let sum = 0

  while (num > 0) {
    if (num & 1) sum += 1
    num >>>= 1
  }

  return sum
}
