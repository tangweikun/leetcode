// Time Complexity O(n)

export function rotateArray(nums, steps) {
  for (let i = 0; i < steps % nums.length; i++) {
    const temp = nums[nums.length - 1];
    nums.pop();
    nums.unshift(temp);
  }

  return nums;
}
