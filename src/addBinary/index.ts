export function addBinary(a: string, b: string): string {
  let result = ''
  let temp = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0) {
    const NumberA = a[i] === undefined ? 0 : Number(a[i])
    const NumberB = b[j] === undefined ? 0 : Number(b[j])
    const currentSum = NumberA + NumberB + temp
    if (currentSum >= 2) {
      result = currentSum - 2 + result
      temp = 1
    } else {
      result = currentSum + result
      temp = 0
    }
    i--
    j--
  }

  return temp ? temp + result : result
}
