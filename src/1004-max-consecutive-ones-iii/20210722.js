/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function (nums, k) {
  let [left, right, res, zeroCount] = [0, 0, 0, 0];

  while (right < nums.length) {
    if (nums[right] === 0) zeroCount++;
    if (zeroCount <= k) {
      res = Math.max(res, right - left + 1);
    }

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    right++;
  }

  return res;
};
