export const nextGreaterElement2 = nums => {
  const res = [];
  const stack = [];

  for (let i = 2 * nums.length - 1; i >= 0; --i) {
    while (
      stack.length > 0 &&
      nums[stack[stack.length - 1]] <= nums[i % nums.length]
    ) {
      stack.pop();
    }

    res[i % nums.length] =
      stack.length === 0 ? -1 : nums[stack[stack.length - 1]];
    stack.push(i % nums.length);
  }

  return res;
};
