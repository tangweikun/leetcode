/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let min = Infinity;
  let sum = 0;

  for (let n of nums) {
    sum += n;
    min = Math.min(min, sum);
  }

  return Math.max(1, 1 - min);
};
