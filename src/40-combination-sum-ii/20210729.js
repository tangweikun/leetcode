// HELP:

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((x, y) => x - y);
  const res = [];
  dfs([], 0, target);
  return res;

  function dfs(temp, index, target) {
    if (candidates.length === index) return;
    if (candidates[index] === target) {
      res.push([...temp, candidates[index]]);
    }

    if (target - candidates[index] >= 0) {
      dfs([...temp, candidates[index]], index + 1, target - candidates[index]);
    }

    let i = index + 1;
    while (i < candidates.length && candidates[i] === candidates[i - 1]) {
      i++;
    }
    dfs(temp, i, target);
  }
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 5));
