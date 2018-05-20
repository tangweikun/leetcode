export function minSteps(n: number): any {
  if (n === 1) return 0
  let i = ~~Math.sqrt(n)
  while (i > 1) {
    if (n % i === 0) return minSteps(n / i) + minSteps(i)
    i--
  }
  return n
}
