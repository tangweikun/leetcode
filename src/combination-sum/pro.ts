export const combinationSum = (candidates: number[], target: number) => {
  let res: number[][] = []
  dfs(0, 0, [])

  function dfs(sum: number, index: number, tmp: number[]) {
    if (sum === target) {
      res.push(tmp.slice())
      return
    }

    if (sum > target) return

    for (let i = index; i < candidates.length; i++) {
      dfs(sum + candidates[i], i, [...tmp, candidates[i]])
    }
  }

  return res
}
