export function missingNumber(nums) {
  const expectSum = ((1 + nums.length) * nums.length) / 2;
  const actuallySum = nums.reduce((x, y) => x + y, 0);
  return expectSum - actuallySum;
}
