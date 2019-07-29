// Time Complexity O(n) [Only a single pass is needed.]
// Space Complexity O(1)  [Only two variables are used.]

export function maxProfit(prices) {
  let min = Infinity;
  let result = 0;
  prices.forEach(n => {
    if (n < min) min = n;
    else result = Math.max(result, n - min);
  });

  return result;
}
