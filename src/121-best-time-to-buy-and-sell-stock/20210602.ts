// Time Complexity O(n) [Only a single pass is needed.]
// Space Complexity O(1)  [Only two variables are used.]

function maxProfit(prices) {
  let res = -Infinity;
  let buy = Infinity;

  for (let i = 0; i < prices.length; i++) {
    res = Math.max(res, prices[i] - buy);
    buy = Math.min(buy, prices[i]);
  }

  return Math.max(res, 0);
}
