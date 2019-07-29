export function searchInsert(nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  return binarySearch(nums, target, 0, nums.length - 1);
}

function binarySearch(nums, target, low, high) {
  const mid = low + Math.floor((high - low) / 2);
  while (low + 1 < high) {
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) return binarySearch(nums, target, low, mid);
    return binarySearch(nums, target, mid, high);
  }
  // TODO: bug risk
  if (nums[low] === target) return low;
  if (nums[high] === target) return high;
  return mid + 1;
}
