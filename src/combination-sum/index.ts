// HELP:
// backtracking

export const combinationSum = (candidates: number[], target: number) => {
  let res: number[][] = []
  backtracking(res, [], candidates, target, 0)
  return res
}

function backtracking(
  res: number[][],
  temp: number[],
  candidates: number[],
  target: number,
  start: number,
) {
  if (target === 0) res.push(temp.slice())
  if (target > 0) {
    for (let i = start; i < candidates.length; i++) {
      backtracking(
        res,
        [...temp, candidates[i]],
        candidates,
        target - candidates[i],
        i,
      )
    }
  }
}
