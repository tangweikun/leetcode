// Time Complexity O(n)
// Space Complexity O(1)

export function maxProfit2(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const different = prices[i] - prices[i - 1];
    if (different > 0) maxProfit += different;
  }

  return maxProfit;
}
