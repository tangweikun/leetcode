/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
  if (nums.length % k !== 0) return false;

  nums.sort((x, y) => x - y);
  let pre = nums.shift();
  let i = 0;
  let count = 1;

  while (nums.length > 0) {
    if (count === k) {
      i = 0;
      count = 1;
      pre = nums.shift();
      continue;
    }

    if (nums[i] === pre) {
      i++;
      continue;
    }

    if (nums[i] === pre + 1) {
      nums.splice(i, 1);
      count++;
      pre++;
      continue;
    }

    return false;
  }

  return true;
};

console.log(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4));
