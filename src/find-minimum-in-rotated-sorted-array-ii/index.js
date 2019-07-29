// HELP:

export function findMin2(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[right] > nums[left]) return nums[left];

    const mid = ~~((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }

  return nums[left];
}
