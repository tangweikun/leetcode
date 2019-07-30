export const sortColors = nums => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === 2) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    } else if (nums[left] === 0) {
      [nums[left], nums[0]] = [nums[0], nums[left]];
      left++;
    } else {
      left++;
    }
  }

  return nums;
};
