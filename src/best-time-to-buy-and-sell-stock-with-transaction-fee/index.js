// HELP:
// Dynamic Programming

export function maxProfit(prices, fee) {
  let cash = 0;
  let hold = Infinity;
  for (let i = 0; i < prices.length; i++) {
    cash = Math.max(cash, prices[i] - hold - fee);
    hold = Math.min(hold, prices[i] - cash);
  }

  return cash;
}
