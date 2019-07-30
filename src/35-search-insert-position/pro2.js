// FIXME:
export function searchInsert2(nums, target) {
  const len = nums.length;
  let low = 0;
  let high = len - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else return mid;
  }

  return low;
}
