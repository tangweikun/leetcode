/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let res = 0;
  dfs(0, 0);
  return res;

  function dfs(preSum, index) {
    if (index === nums.length) {
      if (preSum === target) {
        res++;
      }
      return;
    }

    dfs(preSum - nums[index], index + 1);
    dfs(preSum + nums[index], index + 1);
  }
};
