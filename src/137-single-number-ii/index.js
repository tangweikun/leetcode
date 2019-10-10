/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const res = new Set();
  const hash = new Set();

  for (let n of nums) {
    hash.has(n) ? res.delete(n) : res.add(n);
    hash.add(n);
  }

  return [...res][0];
};
