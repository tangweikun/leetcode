// HELP:
// backtracking

export const subsetsWithDup = nums => {
  nums.sort((a, b) => a - b);
  let res = [];
  backtracking(res, [], nums, 0);
  return res;
};

function backtracking(res, curr, nums, start) {
  res.push(curr.slice());

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] == nums[i - 1]) continue;
    backtracking(res, [...curr, nums[i]], nums, i + 1);
  }
}
