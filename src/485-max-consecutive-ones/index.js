export function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    current = nums[i] * (current + 1);
    max = Math.max(current, max);
  }

  return max;
}
