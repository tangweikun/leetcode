export const singleNonDuplicate = (nums: number[]) =>
  nums.reduce((acc, x) => acc ^ x)
