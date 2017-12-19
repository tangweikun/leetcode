export function searchInsert1(nums, target) {
  const len = nums.length
  let i = 0
  while (i < len) {
    if (target < nums[i]) return i
    else if (target === nums[i]) return i
    i++
  }
  return len
}

export function searchInsert2(nums, target) {
  const len = nums.length
  let low = 0
  let high = len - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target < nums[mid]) {
      high = mid - 1
    } else if (target > nums[mid]) {
      low = mid + 1
    } else return mid
  }

  return low
}

export function searchInsert(nums, target) {
  if (target < nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length
  return binarySearch(nums, target, 0, nums.length - 1)
}

function binarySearch(nums, target, low, high) {
  const mid = low + Math.floor((high - low) / 2)
  while (low + 1 < high) {
    if (nums[mid] === target) return mid
    if (nums[mid] > target) return binarySearch(nums, target, low, mid)
    return binarySearch(nums, target, mid, high)
  }

  if (nums[low] === target) return low
  if (nums[high === target]) return high
  return mid + 1
}
