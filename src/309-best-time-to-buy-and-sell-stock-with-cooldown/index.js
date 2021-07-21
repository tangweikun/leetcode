// HELP:

var maxProfit = function (prices) {
  let dp_sell = 0; // 卖出
  let dp_buy = -prices[0]; // 买入
  let dp_seal = 0; // 冷冻期
  for (let i = 0; i < prices.length; i++) {
    let temp = dp_sell;
    dp_sell = Math.max(dp_sell, dp_buy + prices[i]);
    dp_buy = Math.max(dp_buy, dp_seal - prices[i]);
    dp_seal = temp;
  }

  return dp_sell;
};
