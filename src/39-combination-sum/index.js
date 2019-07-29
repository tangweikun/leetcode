// HELP:
// backtracking

export const combinationSum = (candidates, target) => {
  let res = [];
  backtracking(res, [], candidates, target, 0);
  return res;
};

function backtracking(res, temp, candidates, target, start) {
  if (target === 0) res.push(temp.slice());
  if (target > 0) {
    for (let i = start; i < candidates.length; i++) {
      backtracking(
        res,
        [...temp, candidates[i]],
        candidates,
        target - candidates[i],
        i,
      );
    }
  }
}
