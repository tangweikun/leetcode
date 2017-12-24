export function greatestCommonDivisor(a: number, b: number) {
  if (a > b) return gcd(a, b)
  return gcd(b, a)
}

const gcd = (bigNumber: number, smallNumber: number): any => {
  const reminder = bigNumber % smallNumber
  if (reminder === 0) return smallNumber
  return gcd(smallNumber, reminder)
}
