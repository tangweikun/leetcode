// HELP:

export const subsets = nums =>
  nums.reduce((sets, n) => [...sets, ...sets.map(set => [...set, n])], [[]]);
