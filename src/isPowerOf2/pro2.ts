// Time Complexity O(1)

export const isPowerOf2 = (num: number): boolean =>
  Number.isInteger(Math.log(num / 4) / Math.log(2))
