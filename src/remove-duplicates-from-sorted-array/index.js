// Time Complexity O(n)
// Space Complexity O(1)

export function removeDuplicates(nums) {
  let pointer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[pointer]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }

  return nums.length ? pointer + 1 : 0;
}
