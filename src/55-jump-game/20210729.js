/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let curEnd = nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    if (curEnd < i) {
      return false;
    }

    curEnd = Math.max(curEnd, nums[i] + i);
  }

  return curEnd >= nums.length - 1;
};
