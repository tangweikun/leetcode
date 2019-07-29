// HELP:
// Recursion
// Time complexity : O(n). The recursive function is called at most n-2 times.
// Space complexity : O(n). The depth of the recursion tree goes upto n-2.

export const numberOfArithmeticSlices = nums => {
  let sum = 0;

  const slices = (nums, i) => {
    let ap = 0;
    if (nums[i] + nums[i - 2] === 2 * nums[i - 1]) {
      ap = 1 + slices(nums, i - 1);
      sum += ap;
    } else if (i >= 2) {
      slices(nums, i - 1);
    }
    return ap;
  };

  slices(nums, nums.length - 1);
  return sum;
};
