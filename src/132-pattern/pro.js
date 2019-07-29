// HELP:
import { _peek } from '../_utils';

export function find132pattern(nums) {
  if (nums.length < 3) return false;
  const min = getMin(nums);
  const stack = [];

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] > min[j]) {
      while (stack.length > 0 && _peek(stack) <= min[j]) {
        stack.pop();
      }
      if (stack.length > 0 && _peek(stack) < nums[j]) {
        return true;
      }
      stack.push(nums[j]);
    }
  }

  return false;
}

const getMin = nums => {
  let min = new Array(nums.length);
  min[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    min[i] = Math.min(min[i - 1], nums[i]);
  }

  return min;
};
