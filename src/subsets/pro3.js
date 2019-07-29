// HELP:

export const subsets = function(nums) {
  const res = [];
  const curr = [];
  dfs(res, nums, curr, 0);
  return res;
};

function dfs(res, nums, curr, start) {
  if (start === nums.length) {
    return res.push(curr.slice());
  }

  dfs(res, nums, curr.concat(nums[start]), start + 1);

  dfs(res, nums, curr, start + 1);
}
