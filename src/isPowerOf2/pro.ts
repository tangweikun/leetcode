// Time Complexity O(1)
export const isPowerOf2Pro = (num: number): boolean => (num & (num - 1)) === 0
