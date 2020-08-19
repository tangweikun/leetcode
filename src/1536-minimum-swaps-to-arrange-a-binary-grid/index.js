/**
 * @param {number[][]} grid
 * @return {number}
 */

//  HELP:
var minSwaps = function (grid) {
  if (grid.length == 1) return 0;
  const n = grid.length;
  const dp = grid.map((g) => g.lastIndexOf(1)); // 求每一行最右边1出现的位置 比如[2,1,0]

  let res = 0;
  // 从第0行开始遍历，分别求每一行满足题意下最少交换次数
  for (let i = 0; i < n; i++) {
    if (dp[i] <= i) continue; // 如果 dp[i] <= i 说明该行从右往左出现的0的个数满足合格网格。

    let t = -1;
    // 求该行下面所有行最早出现的满足该行为合格网格的行
    for (let j = i + 1; j < n; j++) {
      if (dp[j] <= i) {
        t = j;
        break;
      }
    }
    if (t === -1) return -1;

    // 将找到的行t和i交换，并统计交换次数
    for (let j = t; j > i; j--) {
      [dp[j], dp[j - 1]] = [dp[j - 1], dp[j]];
      res++;
    }
  }

  return res;
};
