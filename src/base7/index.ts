export function convertToBase7(n: number) {
  const sign = n >= 0 ? '' : '-'
  let res = ''
  n = Math.abs(n)

  while (n >= 7) {
    res = n % 7 + res
    n = (n - n % 7) / 7
  }

  return sign + n % 7 + res
}
