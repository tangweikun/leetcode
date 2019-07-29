export function findPeakElement(nums) {
  let max = -Infinity;
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      position = i;
      max = nums[i];
    }
  }

  return position;
}
