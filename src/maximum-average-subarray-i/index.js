export function findMaxAverage(nums, k) {
  let sum = 0;
  let j = 0;
  while (j < k) {
    sum += nums[k - 1 - j];
    j++;
  }
  let max = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }

  return max / k;
}
