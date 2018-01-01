export function maxProfit(prices: number[]) {
  let min = Infinity
  let result = 0
  prices.forEach(n => {
    if (n < min) min = n
    else result = Math.max(result, n - min)
  })

  return result
}
