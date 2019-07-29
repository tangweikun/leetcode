export function pivotIndex(nums) {
  const sum = nums.reduce((x, y) => x + y, 0);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += ~~nums[i - 1];
    rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) return i;
  }

  return -1;
}
