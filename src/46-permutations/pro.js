// HELP:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// backtrack

var permute = function(nums) {
  let res = [];
  backtrack([], nums);
  return res;

  function backtrack(arr, rest) {
    if (arr.length == nums.length) {
      res.push(arr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      backtrack(
        arr.concat(rest[i]),
        rest.slice(0, i).concat(rest.slice(i + 1)),
      );
    }
  }
};

permute([1, 2, 3]);
