/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((x, y) => x - y);
  const res = [];
  dfs([], nums);
  return res;

  function dfs(temp, arr) {
    if (temp.length === nums.length) {
      res.push(temp);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        continue;
      }
      dfs([...temp, arr[i]], [...arr.slice(0, i), ...arr.slice(i + 1)]);
    }
  }
};

console.log(permuteUnique([1, 2, 2]));
