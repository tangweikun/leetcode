// export const findTargetSumWays = (nums: number[], target: number): any => {
//   if (nums.length === 1) {
//     if (nums[0] === 0 && target === 0) return 2
//     if (nums[0] === Math.abs(target)) return 1
//     return 0
//   }

//   return (
//     findTargetSumWays(
//       nums.slice(0, nums.length - 1),
//       target + nums[nums.length - 1],
//     ) +
//     findTargetSumWays(
//       nums.slice(0, nums.length - 1),
//       target - nums[nums.length - 1],
//     )
//   )
// }

// HELP:

export const findTargetSumWays = (nums, S) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum < S || (sum + S) % 2 !== 0) {
    return 0;
  }

  const target = (S + sum) / 2;
  const dp = [];
  for (let i = 0; i <= target; i++) {
    dp[i] = 0;
  }
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
};
