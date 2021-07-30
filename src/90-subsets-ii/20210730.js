/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((x, y) => x - y);
  const res = [];
  backtracking([], 0);
  return res;

  function backtracking(temp, index) {
    if (index === nums.length) {
      res.push(temp);
      return;
    }

    backtracking([...temp, nums[index]], index + 1);

    let i = index + 1;
    while (i < nums.length && nums[i] === nums[i - 1]) {
      i++;
    }

    backtracking(temp, i);
  }
};

console.log(subsetsWithDup([1, 2, 2, 2]));
