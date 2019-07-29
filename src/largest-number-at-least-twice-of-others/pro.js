export const dominantIndex = function(nums) {
  let first = nums[0];
  let second = -Infinity;
  let maxIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= first) {
      second = first;
      first = nums[i];
      maxIndex = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }

  return first >= second * 2 ? maxIndex : -1;
};
