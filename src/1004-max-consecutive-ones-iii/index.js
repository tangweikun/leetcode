// HELP:

/**
 * 滑动窗口
 * 时间：O(N), 88ms
 */
var longestOnes = function (nums, k) {
  let [left, right, zeroCount, res] = [0, 0, 0, 0];

  while (right < nums.length) {
    if (nums[right] === 0) zeroCount++;

    if (zeroCount <= k) {
      // 能替换所有0
      res = Math.max(res, right - left + 1);
    }
    while (zeroCount > k) {
      // 不能替换的情况：删除字符
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    right++;
  }

  return res;
};
