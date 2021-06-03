/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  dfs(target, [], 0);
  return res;

  function dfs(target, combine, index) {
    if (index === candidates.length) {
      return;
    }
    if (target === 0) {
      res.push(combine);
      return;
    }
    dfs(target, combine, index + 1);
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...combine, candidates[index]], index);
    }
  }
};
