// HELP:

import { _peek } from '../_utils';

export function find132pattern(nums) {
  if (nums.length < 3) return false;

  let mid = -Infinity;
  let stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < mid) return true;

    while (stack.length > 0 && nums[i] > _peek(stack)) {
      mid = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
}
