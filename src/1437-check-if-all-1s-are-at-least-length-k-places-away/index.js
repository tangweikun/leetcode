/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      stack.push(i);
    }

    if (stack.length > 1) {
      if (stack[stack.length - 1] - stack[stack.length - 2] <= k) {
        return false;
      }
    }
  }

  return true;
};
