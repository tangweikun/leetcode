// HELP:

export const canPartition = function(nums) {
  const sum = nums.reduce((acc, n) => acc + n, 0);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  nums.sort((a, b) => b - a);

  return backTracking(nums, [], 0, 0, target);
};

function backTracking(nums, selected, index, sum, target) {
  if (selected.length >= nums.length) return false;
  if (sum > target) return false;
  if (sum === target) return true;

  for (let i = index; i < nums.length; i++) {
    if (nums[i] > target) return false;
    selected.push(nums[i]);

    if (backTracking(nums, selected, i + 1, sum + nums[i], target)) return true;

    selected.pop();
  }

  return false;
}
