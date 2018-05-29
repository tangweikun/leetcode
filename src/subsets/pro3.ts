// HELP:

export const subsets = function(nums: number[]) {
  const res: number[][] = []
  const curr: number[] = []
  dfs(res, nums, curr, 0)
  return res
}

function dfs(res: number[][], nums: number[], curr: number[], start: number) {
  if (start === nums.length) {
    return res.push(curr.slice())
  }

  dfs(res, nums, curr.concat(nums[start]), start + 1)

  dfs(res, nums, curr, start + 1)
}
