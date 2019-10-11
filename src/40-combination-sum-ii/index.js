// HELP:

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  candidates.sort((x, y) => x - y);
  backtrack(candidates, target, 0, []);

  return res;

  function backtrack(arr, target, sum, temp) {
    if (target < sum) return;
    if (target === sum) {
      res.push(temp);
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) continue;
      backtrack(arr.slice(i + 1), target, sum + arr[i], [...temp, arr[i]]);
    }
  }
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 5));
