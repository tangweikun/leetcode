export function countNumbersWithUniqueDigits(n: number): any {
  if (n === 0) return 1
  let dp = 10

  for (let i = 2; i <= n; i++) {
    dp += Array.from({ length: i - 1 }, (_, j) => 9 - j).reduce(
      (acc, x) => acc * x,
      9,
    )
  }

  return dp
}
