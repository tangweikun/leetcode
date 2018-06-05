// HELP:
// backtracking

export const subsetsWithDup = (nums: number[]) => {
  nums.sort((a, b) => a - b)
  let res: number[][] = []
  backtracking(res, [], nums, 0)
  return res
}

function backtracking(
  res: number[][],
  curr: number[],
  nums: number[],
  start: number,
) {
  res.push(curr.slice())

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] == nums[i - 1]) continue
    backtracking(res, [...curr, nums[i]], nums, i + 1)
  }
}
