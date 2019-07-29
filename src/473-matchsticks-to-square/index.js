// HELP:

export const makeSquare = nums => {
  if (!nums.length) return false;
  nums.sort((a, b) => b - a);
  let buckets = Array(4).fill(0);
  const sum = nums.reduce((acc, x) => acc + x, 0);
  const sideLength = sum / 4;

  return backTracking(nums, buckets, 0, sideLength);
};

function backTracking(nums, buckets, pos, target) {
  if (pos >= nums.length) return true;

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] + nums[pos] > target) continue;
    buckets[i] += nums[pos];
    if (backTracking(nums, buckets, pos + 1, target)) return true;
    buckets[i] -= nums[pos];
  }

  return false;
}
