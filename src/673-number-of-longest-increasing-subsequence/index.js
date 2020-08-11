/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let n = nums.length;
  let dp = Array(n).fill(1);
  let count = Array(n).fill(1);
  // let max = 1;

  for (let i = 1; i < n; i++) {
    // max = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 用 更新的 dp 判断，只要更新为最大值一次，后面都是最大值，每次都进 if 不对，不能用 更新后的 dp 判断
        // 得用当前的 dp[j] + 1 判断

        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
  }

  // max = 1;
  let max = 1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] === max) {
      ans += count[i];
    }
    if (dp[i] > max) {
      max = dp[i];
      ans = count[i];
    }
  }

  return ans;
};
