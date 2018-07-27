export function selfDividingNumbers(start: number, end: number) {
  const res = []

  for (let i = start; i <= end; i++) {
    if (isSelfDividingNumber(i)) res.push(i)
  }

  return res
}

function isSelfDividingNumber(num: number) {
  let n = num

  while (n > 0) {
    if (num % (n % 10) !== 0) return false
    n = ~~(n / 10)
  }

  return true
}
