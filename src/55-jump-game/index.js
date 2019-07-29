// HELP:

export function canJump(nums) {
  let lastPosition = nums.length - 1;

  for (let i = lastPosition; i >= 0; i--) {
    if (i + nums[i] >= lastPosition) lastPosition = i;
  }

  return lastPosition === 0;
}
