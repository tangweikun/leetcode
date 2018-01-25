export function findComplement(num: number) {
  return num ^ (2 ** num.toString(2).length - 1)
}
