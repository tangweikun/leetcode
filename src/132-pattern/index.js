// HELP:
// Time complexity : O(n^2)
// Space complexity : O(1)

export function find132pattern(nums) {
  let min = Infinity;

  for (let j = 0; j < nums.length - 1; j++) {
    min = Math.min(min, nums[j]);
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[k] < nums[j] && min < nums[k]) return true;
    }
  }

  return false;
}
