// HELP:

export const subsets = (nums: number[]) => {
  let res: number[][] = []
  backtrack(res, [], nums, 0)
  return res
}

function backtrack(
  res: number[][],
  curr: number[],
  nums: number[],
  start: number,
) {
  res.push(curr)

  for (let i = start; i < nums.length; i++) {
    backtrack(res, curr.concat(nums[i]), nums, i + 1)
  }
}
