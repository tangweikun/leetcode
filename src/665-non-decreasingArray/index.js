// HELP:

export const checkPossibility = function(nums) {
  let counter = 0;
  let min = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      counter++;
      if (counter > 1) return false;
      if (min > nums[i + 1]) nums[i + 1] = nums[i];
      nums[i] = Math.min(nums[i], min);
    }
    min = nums[i];
  }
  return true;
};
