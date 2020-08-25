/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const res = [];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      res[index] = sum;
      index++;
    }
  }

  res.sort((x, y) => x - y);

  return (
    res.slice(left - 1, right).reduce((acc, x) => acc + x, 0) %
    (Math.pow(10, 9) + 7)
  );
};
