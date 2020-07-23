/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let count = k;
  for (let n of nums) {
    if (n === 1) {
      if (count < k) {
        return false;
      }
      count = 0;
    } else {
      count++;
    }
  }

  return true;
};
