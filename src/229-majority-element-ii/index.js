/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const target = nums.length / 3;
  const hash = {};
  const res = new Set();

  for (let n of nums) {
    hash[n] = ~~hash[n] + 1;
    if (hash[n] > target) {
      res.add(n);
    }
  }

  return [...res];
};
