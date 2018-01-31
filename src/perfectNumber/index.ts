export function checkPerfectNumber(num: number) {
  let i = 1
  let sum = 0
  let limit = Math.sqrt(num)

  while (i <= limit) {
    if (num % i === 0) {
      if (sum === 1) limit = num / i
      sum += i
    }
    i++
  }

  return num > 1 && sum === num
}
