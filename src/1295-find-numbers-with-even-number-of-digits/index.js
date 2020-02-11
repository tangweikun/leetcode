/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let res = 0;

  for (let n of nums) {
    if (String(n).length % 2 === 0) {
      res++;
    }
  }

  return res;
};
