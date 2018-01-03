export function maxProfit2(prices: number[]) {
  let min = Infinity
  let result = 0
  prices.forEach(n => {
    if (n > min) result += n - min
    min = n
  })

  return result
}
