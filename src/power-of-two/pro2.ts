// Time Complexity O(1)

export const isPowerOf2 = (num: number): boolean =>
  Number.isInteger(Math.log2(num))
