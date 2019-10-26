// HELP:

var maxProfit = function(prices) {
  let dp_0 = 0;
  let dp_1 = -prices[0];
  let dp_0_prev = 0;
  for (let i = 0; i < prices.length; i++) {
    let temp = dp_0;
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, dp_0_prev - prices[i]);
    dp_0_prev = temp;
  }

  return dp_0;
};
