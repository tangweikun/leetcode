// HELP:

export const subsets = (nums: number[]) =>
  nums.reduce((sets, n) => [...sets, ...sets.map(set => [...set, n])], [[]])
