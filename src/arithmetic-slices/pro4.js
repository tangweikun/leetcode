// Time complexity : O(n). We iterate over A with n elements exactly once.
// Space complexity : O(1)
// Formula

export const numberOfArithmeticSlices = nums => {
  let count = 0;
  let sum = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] + nums[i - 2] === 2 * nums[i - 1]) {
      count++;
    } else {
      sum += ((count + 1) * count) / 2;
      count = 0;
    }
  }

  return sum + ((count + 1) * count) / 2;
};
