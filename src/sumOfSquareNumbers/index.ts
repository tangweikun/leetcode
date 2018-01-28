export function judgeSquareSum(num: number) {
  let i = ~~Math.sqrt(num)

  while (i >= 0) {
    if (Number.isInteger(Math.sqrt(num - i * i))) {
      return true
    }
    i--
  }

  return false
}
