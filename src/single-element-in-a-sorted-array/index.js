export const singleNonDuplicate = nums => {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== nums[i + 1]) return nums[i];
    i += 2;
  }
};
