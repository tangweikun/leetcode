export function addBinary(a: string, b: string): string {
  let result = ''
  let temp = 0
  let i = a.length - 1
  let j = b.length - 1
  const getNumber = (str: string) => (str === undefined ? 0 : Number(str))

  while (i >= 0 || j >= 0 || temp === 1) {
    const currentSum = getNumber(a[i--]) + getNumber(b[j--]) + temp
    result = currentSum % 2 + result
    temp = currentSum >> 1
  }

  return result
}
