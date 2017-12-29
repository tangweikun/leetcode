export function maximumSubArray(nums: number[]) {
  let preSum = 0
  let maxSum = -Infinity

  for (let elem of nums) {
    const nextSum = preSum + elem
    if (nextSum > maxSum) maxSum = nextSum
    preSum = nextSum > 0 ? nextSum : 0
  }

  return maxSum
}
