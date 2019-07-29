export function maximumSubArray(nums) {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let elem of nums) {
    const nextSum = currentSum + elem;
    maxSum = Math.max(maxSum, nextSum);
    currentSum = Math.max(nextSum, 0);
  }

  return maxSum;
}
