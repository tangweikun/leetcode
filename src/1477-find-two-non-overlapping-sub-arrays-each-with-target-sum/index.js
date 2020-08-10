/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

//  HELP:
var minSumOfLengths = function (arr, target) {
  let pre = [];
  let res = Infinity;
  let sum = 0;

  pre[0] = -1; // 简化边界

  let dp = new Array(arr.length + 1).fill(Infinity);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    pre[sum] = i;
    if (sum < target) continue;

    dp[i + 1] = dp[i];
    if (pre[sum - target] !== undefined) {
      dp[i + 1] = Math.min(dp[i], i - pre[sum - target]);
      res = Math.min(res, i - pre[sum - target] + dp[pre[sum - target] + 1]);
    }
  }

  return res === Infinity ? -1 : res;
};
