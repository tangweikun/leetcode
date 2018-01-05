// Time Complexity O(n)

export function rotateArray(nums: number[], steps: number) {
  for (let i = 0; i < steps % nums.length; i++) {
    const temp = nums[nums.length - 1]
    nums.pop()
    nums.unshift(temp)
  }

  return nums
}
