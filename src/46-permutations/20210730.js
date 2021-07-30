/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  dfs([], nums);
  return res;

  function dfs(temp, arr) {
    if (temp.length === nums.length) {
      res.push(temp);
    }

    for (let i = 0; i < arr.length; i++) {
      dfs([...temp, arr[i]], [...arr.slice(0, i), ...arr.slice(i + 1)]);
    }
  }
};

console.log(permute([1, 2]));
