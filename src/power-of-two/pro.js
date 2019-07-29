// Time Complexity O(1)
export const isPowerOf2 = num => (num > 0 ? (num & (num - 1)) === 0 : false);
