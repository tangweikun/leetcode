// HELP:

export const findSubsequences = function(nums) {
  let res = [];
  dfs(nums, 0, [], res);
  return res;
};

function dfs(nums, index, cur, res) {
  if (cur.length >= 2) res.push(cur.slice(0));
  let used = new Set();
  for (let i = index; i < nums.length; i++) {
    if (used.has(nums[i])) continue;
    if (cur.length === 0 || nums[i] >= cur[cur.length - 1]) {
      used.add(nums[i]);
      cur.push(nums[i]);
      dfs(nums, i + 1, cur, res);
      cur.pop();
    }
  }
}
