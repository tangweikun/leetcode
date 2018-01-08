export function reverseBits(num: number) {
  let result = 0
  let bit = ''

  while (num >= 1) {
    bit += num % 2
    num = num % 2 === 1 ? (num - 1) / 2 : num / 2
  }

  const distinct = 32 - bit.length

  for (let i = 0; i < bit.length; i++) {
    result += Math.pow(2, bit.length - 1 - i + distinct) * bit[i]
  }

  return result
}
