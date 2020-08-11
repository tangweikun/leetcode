/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  if (nums.length === 0) return 0;

  let dp = new Array(nums.length).fill(1);
  let counts = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 从 i- 1 向前观察元素，
      if (nums[i] > nums[j]) {
        // 如果元素 比 i 小，那么说明找到一个子串, 且这个子串的长度为 dp[j] + 1
        if (dp[j] + 1 > dp[i]) {
          // 如果寻找到这个子串的长度比现有的长，说明这个更长的子串
          dp[i] = dp[j] + 1; // 设置新的最长子串的值
          counts[i] = counts[j]; // 此时，最长子串的数量等于长度为 j 的子串的数量，多了一位 i 而已。
        } else if (dp[j] + 1 == dp[i]) {
          // 如果相等，说明找到另一个 j, 也能 + 1 达到最长的长度，说明这些子串的个数也要计算
          counts[i] += counts[j];
        }
      }
    }
    max = Math.max(max, dp[i]);
  }
  let res = 0;
  for (let i = 0; i < counts.length; i++) {
    if (dp[i] === max) {
      res += counts[i];
    }
  }

  return res;
};
