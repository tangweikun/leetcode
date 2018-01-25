export function findComplement(num: number) {
  let sum = 0
  let i = 0

  while (num > 0) {
    sum += (num & 1) === 0 ? Math.pow(2, i) : 0
    num >>= 1
    i++
  }

  return sum
}
