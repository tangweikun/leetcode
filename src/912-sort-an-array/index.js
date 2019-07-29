/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
  if (nums.length <= 1) return nums;

  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums.splice(pivotIndex, 1)[0];
  const [left, right] = [[], []];

  for (let num of nums) {
    if (num < pivot) left.push(num);
    else right.push(num);
  }

  return [...sortArray(left), pivot, ...sortArray(right)];
};
