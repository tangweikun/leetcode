// HELP:
// Depth First Search

export const combinationSum = (candidates, target) => {
  let res = [];
  dfs(0, 0, []);

  function dfs(sum, index, tmp) {
    if (sum === target) {
      res.push(tmp.slice());
      return;
    }

    if (sum > target) return;

    for (let i = index; i < candidates.length; i++) {
      dfs(sum + candidates[i], i, [...tmp, candidates[i]]);
    }
  }

  return res;
};
