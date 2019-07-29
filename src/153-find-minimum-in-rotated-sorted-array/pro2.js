// HELP:

export function findMin(nums) {
  if (nums[0] <= nums[nums.length - 1]) return nums[0];

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const pivot = ~~((left + right) / 2);
    nums[pivot] > nums[right] ? (left = pivot + 1) : (right = pivot);
  }

  return nums[left];
}
