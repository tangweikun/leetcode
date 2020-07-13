/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  nums.sort((x, y) => x - y);
  let current = nums[0];
  let currentCount = 1;
  let res = 0;

  for (let i = 1; i < nums.length; i++) {
    if (current === nums[i]) {
      currentCount++;
    } else {
      res += (currentCount * (currentCount - 1)) / 2;

      currentCount = 1;
      current = nums[i];
    }
  }

  res += (currentCount * (currentCount - 1)) / 2;

  return res;
};
