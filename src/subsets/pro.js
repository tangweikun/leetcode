// HELP:

export const subsets = nums => {
  let res = [];
  backtrack(res, [], nums, 0);
  return res;
};

function backtrack(res, curr, nums, start) {
  res.push(curr);

  for (let i = start; i < nums.length; i++) {
    backtrack(res, curr.concat(nums[i]), nums, i + 1);
  }
}
