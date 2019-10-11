/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((x, y) => x - y);
  let res = [];
  backtrack(nums, []);
  return res;

  function backtrack(arr, temp) {
    if (temp.length === nums.length) {
      res.push(temp);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) continue;
      const copy = arr.slice();
      const current = copy[i];
      copy.splice(i, 1);
      backtrack(copy, [...temp, current]);
    }
  }
};

console.log(permuteUnique([1, 2, 2]));
