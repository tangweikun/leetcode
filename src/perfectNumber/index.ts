export function checkPerfectNumber(num: number) {
  if (num <= 2) return false

  let i = 2
  let sum = 1
  let limit = num / 2

  while (i <= limit) {
    if (num % i === 0) {
      if (sum === 1) limit = num / i
      sum += i
    }
    i++
  }

  return sum === num
}
