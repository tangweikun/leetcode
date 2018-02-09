export function searchRange(nums: number[], target: number) {
  let start = -1
  let end = -1

  for (let i = 0; i < nums.length; i++) {
    if (target < nums[i]) return [start, end]

    if (target === nums[i]) {
      if (start === -1) start = i
      end = i
    }
  }

  return [start, end]
}
